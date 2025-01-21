import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { CircularProgress } from "@mui/material";

export const TabelaNfes = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Referência</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Status Envio</TableCell>
                        <TableCell>Mensagem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.nfes.length > 0 ?
                props.nfes.map((row) => (
                    <TableRow key={row.referencia} >
                        <TableCell >
                            {row.referencia}
                        </TableCell>
                        <TableCell >{row.razao_social}</TableCell>
                        <TableCell >{row.codigo}</TableCell>
                        <TableCell>{row?.mensagem} {row?.erros?.toString()}</TableCell>
                    </TableRow>
                )) : 
                    <TableRow key="nada-encontrado" >
                        <TableCell >
                        </TableCell>
                        <TableCell ></TableCell>
                        <TableCell >Nenhuma nota importada.</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                }
                </TableBody>
            </Table>
        </TableContainer>
    );
}