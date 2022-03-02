import React from 'react';
import './App.css';
import {Typography} from "@mui/material";
import {Backspace} from "@mui/icons-material";
import {RecoilRoot, selector, useRecoilState, useRecoilValue,} from 'recoil';
import _ from 'lodash';
import {NumberButton} from "./NumberButton";
import {EqualsButton, OperatorButton} from "./OperatorButton";
import {
    calcInput_state,
    elements_state, Digit,
    Operator, elementsToString, calculate, resultValue_state,
} from './Model'

function Calculator() {

    const [elements, setElements] = useRecoilState(elements_state);
    const [calcInput, setCalcInput] = useRecoilState(calcInput_state);
    const [resultValue, setResultValue] = useRecoilState(resultValue_state);

    const inputAsText = selector({
        key: 'inputAsText',
        get: ({get}) => {
            return elements.length > 0
                ? elementsToString(elements)
                : '';
        }
    })

    const inputAsTextValue = useRecoilValue(inputAsText);

    const resultValueSelector = selector({
        key: 'resultValueText',
        get: ({get}) => {
            try {
                return resultValue;
            } catch (err) {
                console.error(err);
            }
        }
    })

    const resultValueText = useRecoilValue(resultValueSelector);

    const onDigit = ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => {

        const empty = calcInput.length == 0;

        console.log("onClick", value)
        const input = calcInput +  parseInt(value).toString();
        setCalcInput(input);
        setElements([...(empty ? elements : _.dropRight(elements, 1)), input])
        console.table({elements: inputAsTextValue, calcInput: input});
    };

    const onOperator = ({currentTarget: {value}}: React.MouseEvent<HTMLButtonElement>) => {
        if (!(value as Operator)) {
            throw new Error(`wrong type {value}`)
        }

        console.log("onOperator", value)
        setElements([...elements, value as Operator])
        setCalcInput('');
        console.table({elements: inputAsTextValue, calcInput: calcInput});
    };

    const onEquals = (event: any) => {
        const result = calculate(elementsToString(elements));
        setElements([]);
        setCalcInput('');
        setResultValue(result);
        console.log("result", result);
    };

    const onBackSpace = ({currentTarget: {value}}: React.MouseEvent<any>) => {
        console.log("elements", elements);
        if (elements.length > 0) {
            const last1 = _.last(elements) as string;
            if (last1.length == 0) {
                setElements(_.dropRight(elements, 1))
            }
            const last = (_.last(elements) as string);

            console.log("last", last);
            const left = _.dropRight(elements, 1);
            const backspaced = last.substring(0, last.length - 1);
            if (backspaced.length == 0) {
                setElements(left);
                setCalcInput((left.length > 0 ? (_.last(left) as string) : ''));
            } else {
                const digits = backspaced;
                setElements([...left, digits])
                setCalcInput(digits);
            }

        }
    };

    function getDisabled() {
        return calcInput.length == 0 ? true : false;
    }


    return <div>
        <div className="calculator">
            <div>
                <NumberButton onClick={onDigit} value={1}/>
                <NumberButton onClick={onDigit} value={2}/>
                <NumberButton onClick={onDigit} value={3}/>
                <OperatorButton op="+" disabled={getDisabled()} onClick={onOperator}/>
                <OperatorButton op="*" disabled={getDisabled()} onClick={onOperator}/>
            </div>
            <div>
                <NumberButton onClick={onDigit} value={4}/>
                <NumberButton onClick={onDigit} value={5}/>
                <NumberButton onClick={onDigit} value={6}/>
                <OperatorButton op="-" disabled={getDisabled()} onClick={onOperator}/>
                <OperatorButton op="/" disabled={getDisabled()} onClick={onOperator}/>
            </div>
            <div>
                <NumberButton onClick={onDigit} value={7}/>
                <NumberButton onClick={onDigit} value={8}/>
                <NumberButton onClick={onDigit} value={9}/>
                <NumberButton onClick={onDigit} value={0}/>
                <EqualsButton op="=" disabled={getDisabled()} onClick={onEquals}/>

            </div>
            <div>
                <Typography data-testid="user_input">{inputAsTextValue}</Typography>
                <Backspace color="primary" fontSize="large" onClick={onBackSpace}></Backspace>
                <Typography data-testid="result">{resultValueText}</Typography>
            </div>
        </div>
        {/*<div className="history">*/}
        {/*    <ul>*/}
        {/*        <li>1 + 2</li>*/}
        {/*    </ul>*/}
        {/*</div>*/}

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
