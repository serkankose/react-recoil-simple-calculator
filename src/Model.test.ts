import {calculate, Digit, Operator, Element, isDigit, digitsToString} from "./Model";
import _ from 'lodash';

describe("Model", () => {
    it('can identify a Digit', () => {
        expect(isDigit('1')).toBe(true);
        expect(isDigit('a')).toBe(false);
        expect(isDigit('+')).toBe(false);

    });
    it('converts elements to string', () => {
        const digits : Digit[] = [1, 2, 3];
        expect(digitsToString(digits)).toBe("123");
    });

    it('adds 22 and 333', () => {
        expect(calculate("22 + 333")).toBe(355);
    });
    it('subtracts 22 from 333', () => {
        expect(calculate("22 - 333")).toBe(-311);
    });
    it('multiply 22 and 333', () => {
        expect(calculate("22 * 333")).toBe(7326);
    });
    it('divide 22 with 333', () => {
        expect(calculate("22/333")).toBe(0.07);
    });
    it('adds 22, -5 and 333', () => {
        expect(calculate("22 + -5 * 10 + 333 / 11 - 100")).toBe(-97.73);
    });
})

export {}