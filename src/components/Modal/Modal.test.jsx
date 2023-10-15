import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import {describe, expect, test } from "vitest";
import Modal from './Modal';

describe('Modal Component', () => {
    test('should render the modal header', () => {
        const header = 'Modal Header';
        const modal = render(<Modal header={header} />);
        const modalHeader = modal.getByText(header);
      
        expect(modalHeader).toBeInTheDocument();
    });
      
    test('should render the modal text', () => {
        const text = 'Modal text';
        const modal = render(<Modal text={text} />);
        const modalText = modal.getByText(text);
      
        expect(modalText).toBeInTheDocument();
    });
      
    test('should render the modal buttons', () => {
        const buttons = [<button>Button</button>, <button>Button</button>];
        const modal = render(<Modal children={buttons} />);
        const modalButtons = modal.getAllByText('Button');
      
        expect(modalButtons).toHaveLength(2);
    });
});