import React from "react";
import {Button} from "@mui/material";
import {Digit} from "./Model";




export function NumberButton(props: { value: Digit, onClick: ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => void }) {
    return <Button variant="contained" color="primary" onClick={props.onClick}
                   value={props.value}>{props.value}</Button>;
}