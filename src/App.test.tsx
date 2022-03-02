import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

function clickButton(getByText: any, buttonText: string) {
    const one = getByText(buttonText);
    expect(one).toBeInTheDocument();
    userEvent.click(one);
}

describe("operations on calculator", () => {
    it('renders input label', () => {
        render(<App/>);
        const inputElement = screen.getByTestId("user_input");
        expect(inputElement).toBeInTheDocument();
    });

    test('adds numbers to input when clicked', async () => {

        const {getByText, debug} = render(<App/>);

        clickButton(getByText, "1");
        clickButton(getByText, "2");

        const inputLabel = screen.getByTestId("user_input") as HTMLInputElement;
        expect(inputLabel).toHaveTextContent("12");

    });
});
