import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from "vitest";
import ButtonClose from './ButtonClose';

test('ButtonClose component matches snapshot', () => {
    const { asFragment } = render(<ButtonClose />);
    expect(asFragment()).toMatchSnapshot();
});