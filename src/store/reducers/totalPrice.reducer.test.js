import totalReducer from "./totalPrice.reducer";
import { test, describe, expect } from "vitest";

describe("redux totalPrice reducer for the price in the state", () => {
    const initialState = {
        price: 0
    };

    test('should increase the value in the state', () => {
        const newPrice = 55;
        
        const action = {type: "UPDATE_PRICE", payload: newPrice};
        const newState = totalReducer(initialState, action);

        expect(newState).toEqual({"price": newPrice});
    });

    test('should return the initial state', () => {

        const action = {type: "UNKNOWN"};
        const newState = totalReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});