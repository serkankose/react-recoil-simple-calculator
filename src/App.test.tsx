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

        const inputLabel = screen.getByTestId("user_input") as HTMLParagraphElement;
        expect(inputLabel).toHaveTextContent("12");


        clickButton(getByText, "*");
        clickButton(getByText, "1");
        clickButton(getByText, "2");
        clickButton(getByText, "-");
        clickButton(getByText, "4");
        clickButton(getByText, "4");

        clickButton(getByText, "=")

        const result = screen.getByTestId("result") as HTMLParagraphElement;
        expect(result).toHaveTextContent("100");

    });
});
