import axios from 'axios';

export const api = axios.create({
    baseURL: '/api',
    headers:{
        "Content-Type":"application/json"
    }
})

export const consultarNfe = async () => {
    await api.get("/nfe/consultar").then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

export const enviarNfe = async (nfes) => {
    return await api.post("/nfe/enviar", nfes).then((response) => {
        console.log(response);
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}

export const consultarEmpresas = async () => {
    return  await api.get("/empresas/consultar").then((response) => {
        console.log(response)
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}

export const consultarNfeTest = async (count) => {
    return await api.patch("/nfe/teste_consultar", {count}).then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}

export const enviarNfeTest = async () => {
    const nfes = [
            {
                referencia_interna: "empresa_test_1",
                nome_emitente: "Empresa Teste 1"
            },
            {
                referencia_interna: "empresa_test_2",
                nome_emitente: "Empresa Teste 2"
            },
            {
                referencia_interna: "empresa_test_3",
                nome_emitente: "Empresa Teste 3"
            },
            {
                referencia_interna: "empresa_test_4",
                nome_emitente: "Empresa Teste 4"
            },
        ];
    return await api.post("/nfe/teste_enviar", nfes).then((response) => {
        return response;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}