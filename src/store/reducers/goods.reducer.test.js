import goodsReducer from "./goods.reducer";
import { test, describe, expect } from "vitest";

describe("redux totalPrice reducer for the price in the state", () => {
    const initialState = {
        goods: []
    };

    test('should add items to the state', () => {
        const newItems = [
            { name: "Jeans", price: 140},
            { name: "Shirt", price: 70},
        ];
        
        const action = {type: "ADD_GOODS", payload: newItems};
        const newState = goodsReducer(initialState, action);

        expect(newState).toEqual({"goods": newItems});
    });

    test('should return the initial state', () => {

        const action = {type: "UNKNOWN"};
        const newState = goodsReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});