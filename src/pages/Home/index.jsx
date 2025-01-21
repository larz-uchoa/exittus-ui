import { ButtonsContainer, Container, MessageContainer } from "./styles";
import { useEffect, useState } from "react";
import { ConsultarEmpresasBtn, EnviarPlanilhaBtn, TabelaNfes } from "./components";
import { consultarEmpresas, consultarNfe, enviarNfe } from "../../services/api";
import readXlsxFile from "read-excel-file";
import { planilhaNfeSchema } from "../../schemas/NfeSchema";

export const Home = () => {
    const [inProgress, setInProgress] = useState(false);
    const [message, setMessage] = useState('');
    const [nfesEnviadas, setNfesEnviadas] = useState([]);

    const consultarNfesProcessadas = async () => {
        const response = await consultarNfe();

        const { nfesProcessadas } = response.data;

        if(nfesProcessadas.some((nfe) => nfe.codigo !== 'processando_autorizacao' )){
            const nfeEnviosVerificados = nfesEnviadas.map((nfe) => {
                const nfeVerificar = nfesProcessadas.find((nfeProcessada) => nfeProcessada.referencia === nfe.referencia);

                if(nfeVerificar && nfeVerificar.codigo !== 'processando_autorizacao'){
                    nfe.codigo = nfeVerificar.codigo;
                }

                return nfe;
            });
            setNfesEnviadas([...nfeEnviosVerificados]);
        } else {
            setTimeout(() => setNfesEnviadas([...nfesEnviadas]), 5000);
        }
    }

    const handleConsultarEmpresas = async() => {
        setMessage('');
        setInProgress(true);
        const response = await consultarEmpresas();
        if (response.status !== 201) {
            setMessage(response.message)
        } else {
            setMessage(response.data.mensagem)
        }

        setInProgress(false);
    }

    const handleImportarNfes = async(event) => {
        setInProgress(true);
        setMessage('Enviando notas fiscais');
        const dadosPlanilha = event.files?.[0];
        const {rows} = await readXlsxFile(dadosPlanilha, { schema: planilhaNfeSchema });

        if(rows){
            const response = await enviarNfe(rows);

            if (response.status !== 202) {
                setMessage(response.message)
                setInProgress(false);
            } else {
                const { nfesErros, nfesProcessadas } = response.data;
                setNfesEnviadas([...nfesErros, ...nfesProcessadas]);
            }
        }      
    }

    useEffect(() =>{
        if(nfesEnviadas) {
            const nfesProcessando = nfesEnviadas.some((nfe) => nfe.codigo === "processando_autorizacao");
            if(nfesProcessando){
                consultarNfesProcessadas();
            }else{
                setMessage('Processo Finalizado')
                setInProgress(false);
            }
        }

    }, [nfesEnviadas]);

    return (
        <Container>
            <h1>Emissor de Nfe's</h1>
            <ButtonsContainer>
                <EnviarPlanilhaBtn disabled={ inProgress} handleOnClick={handleImportarNfes}/>
                <ConsultarEmpresasBtn disabled={ inProgress} handleOnClick={handleConsultarEmpresas}/>
            </ButtonsContainer>
            {message && <MessageContainer>
                {message}
            </MessageContainer>}
            <TabelaNfes nfes={nfesEnviadas} />
        </Container>
    );
}