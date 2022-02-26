import React from 'react';
import './App.css';
import {Button} from "@mui/material";

function App() {
    return (
        <div>
            <div className="calculator">
                <div>
                    <Button variant="contained" color="primary">1</Button>
                    <Button variant="contained" color="primary">2</Button>
                    <Button variant="contained" color="primary">3</Button>
                    <Button variant="contained" color="primary">+</Button>
                    <Button variant="contained" color="primary">*</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary">4</Button>
                    <Button variant="contained" color="primary">5</Button>
                    <Button variant="contained" color="primary">6</Button>
                    <Button variant="contained" color="primary">-</Button>
                    <Button variant="contained" color="primary">/</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary">7</Button>
                    <Button variant="contained" color="primary">8</Button>
                    <Button variant="contained" color="primary">9</Button>
                    <Button variant="contained" color="primary">^</Button>
                    <Button variant="contained" color="primary">=</Button>
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
