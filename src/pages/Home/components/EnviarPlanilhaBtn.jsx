import { VisuallyHiddenInput } from "../styles";

import { Button } from "@mui/material";

export const EnviarPlanilhaBtn = (props) => {
    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            disabled={props.disabled}
        >
            Importar Notas
            <VisuallyHiddenInput
                type="file"
                name="file"
                onChange={async (event) => {
                    await props.handleOnClick(event.target);
                    event.target.value = null;
                }}
                multiple={false}
                accept=".xlsx"
            />
        </Button>
    );
}