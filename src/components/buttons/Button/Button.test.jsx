import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { test, expect, describe } from "vitest";
import '@testing-library/jest-dom/vitest';


describe('<Button/>', () => {
    test('should render the component', () => {
        render(<Button />);
        const btn = screen.getByTestId("Button");
        expect(btn).toBeInTheDocument();
    });
    test('should render the component with exact text', () => {
        render(<Button text="Some text"/>);
        const btn = screen.getByTestId("Button");
        expect(btn).toHaveTextContent("Some text");
    });
    test('should render the disabled button', () => {
        render(<Button disabled/>);
        const btn = screen.getByTestId("Button");
        expect(btn).toBeDisabled();
    });
});