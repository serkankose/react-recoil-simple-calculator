import React from "react";
import {Button} from "@mui/material";
import {Equals, Operator} from "./Model";




export function OperatorButton(props: { op: Operator, disabled: boolean, onClick: ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => void }) {
    return <Button disabled={props.disabled} variant="contained" color="primary" onClick={props.onClick}
                   value={props.op}>{props.op}</Button>;
}

export function EqualsButton(props: { op: Equals, disabled: boolean, onClick: ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => void }) {
    return <Button disabled={props.disabled} variant="contained" color="primary" onClick={props.onClick}
                   value={props.op}>{props.op}</Button>;
}