import { Button } from "@mui/material";

export const ConsultarEmpresasBtn = (props) => {
    return (
        <Button 
            variant="contained"
            color="secondary"
            disabled={props.disabled}
            onClick={() => { props.handleOnClick(); }}
        >
            Consultar Empresas
        </Button>
    );
}