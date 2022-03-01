import React from 'react';
import './App.css';
import {Button, TextField} from "@mui/material";
import {Backspace} from "@mui/icons-material";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import _ from 'lodash';

function Calculator() {

    type Operator = '+' |  '-' |  '*' |  '/' |  '^';
    type Equals = '=';

    const elements_state = atom(
        {
            key: 'elements',
            default: [] as Array<string>
        }
    )

    const calcInput_state = atom(
        {
            key: 'calcInput',
            default: ''
        }
    )

    const [elements, setElements] = useRecoilState(elements_state);
    const [calcInput, setCalcInput] = useRecoilState(calcInput_state);

    const inputAsText = selector({
        key: 'inputAsText',
        get: ({get}) => {
            return elements.length > 0 ?
                elements.reduce((previousValue, currentValue) => {
                    return previousValue + currentValue;
                }) : '';
        }
    })

    const inputAsTextValue = useRecoilValue(inputAsText);

    const onClick = ({currentTarget: {value}} : React.MouseEvent<HTMLButtonElement>) => {

        const empty = calcInput.length == 0;

        console.log("onClick", value)
        const input = calcInput + value;
        setCalcInput(input);
        setElements([...(empty ? elements : _.dropRight(elements, 1)), input])
        console.table({elements: inputAsTextValue, calcInput: input});
    };

    const onOperator = ({currentTarget: {value}} : React.MouseEvent<HTMLButtonElement>) => {
        if(!(value as Operator)){
            throw new Error(`wrong type {value}`)
        }

        console.log("onOperator", value)
        setElements([...elements, value])
        setCalcInput('');
        console.table({elements: inputAsTextValue, calcInput: calcInput});
    };
    const onEqual = (event: any) => {
        throw new Error("not implemented");
    };

    const onBackSpace = ({currentTarget: {value}} : React.MouseEvent<any>) => {
        console.log("elements", elements);
        if (elements.length > 0) {
            if ((_.last(elements) as string).length == 0) {
                setElements(_.dropRight(elements, 1))
            }
            const last = _.last(elements) as string;
            console.log("last", last);
            const left = _.dropRight(elements, 1);
            const backspaced = last.substring(0, last.length - 1) as string;
            if(backspaced.length == 0){
                setElements(left);
                setCalcInput((left.length>0?_.last(left):'') as string);
            }
            else{
                setElements([...left, backspaced])
                setCalcInput(backspaced);
            }

        }
    };

    function getDisabled() {
        return calcInput.length == 0 ? true : false;
    }


    return <div>
        <div className="calculator">
            <div>
                <Button variant="contained" color="primary" onClick={onClick} value="1">1</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="2">2</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="3">3</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onOperator} value="+">+</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onOperator} value="*">*</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={onClick} value="4">4</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="5">5</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="6">6</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onOperator}
                        value="-">-</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onOperator}
                        value="/">/</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={onClick} value="7">7</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="8">8</Button>
                <Button variant="contained" color="primary" onClick={onClick} value="9">9</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onOperator}
                        value="^">^</Button>
                <Button disabled={getDisabled()} variant="contained" color="primary"
                        onClick={onEqual}
                        value="=">=</Button>
            </div>
            <div>
                <TextField disabled data-testid="user_input" label="input" variant="standard"
                           value={inputAsTextValue}></TextField>
                <Backspace color="primary" fontSize="large" onClick={onBackSpace}></Backspace>
            </div>
        </div>
        <div className="history">
            <ul>
                <li>1 + 2</li>
            </ul>
        </div>

    </div>;
}

function App() {
    return (
        <RecoilRoot>
            <Calculator/>
        </RecoilRoot>

    );
}

export default App;
