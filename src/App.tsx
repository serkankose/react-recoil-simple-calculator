import React from 'react';
import './App.css';
import {Button, TextField} from "@mui/material";
import {Backspace, Delete} from "@mui/icons-material";

function App() {
    function append(target: any) {

        console.log(target.value);

    }

    return (
        <div>
            <div className="calculator">
                <div>
                    <Button variant="contained" color="primary" onClick={event => append(event.target)} value="1" >1</Button>
                    <Button variant="contained" color="primary">2</Button>
                    <Button variant="contained" color="primary">3</Button>
                    <Button disabled variant="contained" color="primary">+</Button>
                    <Button disabled variant="contained" color="primary">*</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary">4</Button>
                    <Button variant="contained" color="primary">5</Button>
                    <Button variant="contained" color="primary">6</Button>
                    <Button disabled variant="contained" color="primary">-</Button>
                    <Button disabled variant="contained" color="primary">/</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary">7</Button>
                    <Button variant="contained" color="primary">8</Button>
                    <Button variant="contained" color="primary">9</Button>
                    <Button disabled variant="contained" color="primary">^</Button>
                    <Button disabled variant="contained" color="primary">=</Button>
                </div>
                <div>
                    <TextField disabled id="user_input" label="input" variant="standard"></TextField>
                    <Backspace color="primary" fontSize="large"></Backspace>
                </div>
            </div>
            <div className="history">
                <ul>
                    <li>1 + 2</li>
                </ul>
            </div>

        </div>

    );
}

export default App;
