import {atom} from "recoil";
import _ from 'lodash'
import {evaluate} from "./Model.Expr";


export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Operator = '+' | '-' | '*' | '/' | '^';


// export function calculate(elements: Element[]) {
//     let left = "0";
//     let operation = '+';
//     let result = 0.0;
//     for (let i = 0; i < elements.length; i++) {
//         const right = elements[i]
//
//         switch (operation) {
//             case '+': {
//                 result = parseFloat(left) + parseFloat(right);
//                 break;
//             }
//             case '-': {
//                 result = parseFloat(left) - parseFloat(right);
//                 break;
//             }
//             case '*': {
//                 result = parseFloat(left)  * parseFloat(right);
//                 break;
//             }
//             case '/': {
//                 result = parseFloat(left) / parseFloat(right);
//                 break;
//             }
//         }
//         left =result.toString();
//         operation = elements[++i];
//     }
//     return _.round(result, 2);
// }

export const calculate = (input: string): number => {
    return _.round(evaluate(input), 2);
}

export type Equals = '=';
export type Element = string

export function isDigit(x: any): x is Digit {
    return x.toString().length == 1 &&
        !isNaN(parseInt(x.toString()));
}

export function digitsToString(digits: Digit[]): string {
    return _.reduce(digits, (p, c) => `${p}${c}`, '')
}

export function elementsToString(elements: Element[]): string {
    return _.reduce(elements, (p, c) => `${p}${c}`, '')

}

export const elements_state = atom(
    {
        key: 'elements',
        default: [] as Array<Element>
    }
)

export const calcInput_state = atom(
    {
        key: 'calcInput',
        default: ''
    }
)


