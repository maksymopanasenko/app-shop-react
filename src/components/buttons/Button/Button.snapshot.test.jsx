import React from "react";
import renderer from 'react-test-renderer';
import Button from "./Button";
import { expect, test } from "vitest";

test('Button snapshot', () => {
    const component = renderer.create(<Button text="Some text"/>);
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});