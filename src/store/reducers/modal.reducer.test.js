import modalReducer from "./modal.reducer";
import { test, describe, expect } from "vitest";

describe("Test redux reducer for modal window in the state", () => {
    test('it should open the modal', () => {
        const initialState = {
            isOpen: false
        }
        
        const action = {type: "OPEN"};
        const newState = modalReducer(initialState, action);

        expect(newState).toEqual({isOpen: true});
    });

    test('it should close the modal', () => {
        const initialState = {
            isOpen: true,
            isCheckout: false,
        }
        
        const action = {type: "CLOSE"};
        const newState = modalReducer(initialState, action);

        expect(newState).toEqual({isCheckout: false, isOpen: false});
    });

    test('it should set the appropriate modal', () => {
        const initialState = {
            modal: {}
        };

        const newModal = {
            id: 2,
            header: 'Some title',
            text: 'Some text.'
        }
        
        const action = {type: "OPEN_MODAL", payload: newModal};
        const newState = modalReducer(initialState, action);

        expect(newState).toEqual({modal: newModal});
    });

    test('it should switch modal isOpen and isCheckout to true', () => {
        const initialState = {
            isOpen: false,
            isCheckout: false
        };
        
        const action = {type: "OPEN_CHECKOUT"};
        const newState = modalReducer(initialState, action);

        expect(newState).toEqual({
            isOpen: true,
            isCheckout: true
        });
    });

    test('it should return the state', () => {
        const initialState = {
            isOpen: false,
            isCheckout: false,
            modal: null
        };

        const action = {type: "UNKNOWN"};
        const newState = modalReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});