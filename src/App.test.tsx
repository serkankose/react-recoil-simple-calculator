import React from 'react';
import {cleanup, fireEvent, queryByAttribute, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

async function clickButton(getByText: any, buttonText: string) {
    const one = getByText(buttonText);
    expect(one).toBeInTheDocument();
    userEvent.click(one);
}

describe("operations on calculator", () => {
    xit('renders input text', () => {
        render(<App/>);
        const inputElement = screen.getByText(/input/i);
        console.log(inputElement);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass("Mui-disabled");

    });

    test('adds numbers to input when clicked', () => {

        const {container, getByText, debug} = render(<App/>);
        clickButton(getByText, "1");
        clickButton(getByText, "2");

        const inputElement = screen.getByTestId("user_input") as HTMLInputElement;

        console.log(`inputElement.textContent: \'${inputElement.textContent}\'`);

        expect(inputElement).toHaveTextContent("12");

    });
});
