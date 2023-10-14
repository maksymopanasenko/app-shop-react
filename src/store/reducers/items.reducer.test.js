import itemsReducer from "./items.reducer";
import { test, describe, expect } from "vitest";

describe("redux totalPrice reducer for the price in the state", () => {
    const initialState = {
        items: []
    };

    test('should add an array of items', () => {
        const newItems = [
            { name: "Jeans", price: 140},
            { name: "Shirt", price: 70},
        ];
        
        const action = {type: "ADD_ITEMS", payload: newItems};
        const newState = itemsReducer(initialState, action);

        expect(newState).toEqual({"items": newItems});
    });

    test('should add an item', () => {
        const newItem = { name: "Jeans", price: 140 };
        
        const action = {type: "ADD_ITEM", payload: newItem};
        const newState = itemsReducer(initialState, action);

        expect(newState).toEqual({"items": [newItem]});
    });

    test('should remove an item', () => {
        const exampleState = {
            items: [{ name: "Jeans", price: 140, article: 1034 }]
        };

        const itemId = 1034;
        
        const action = {type: "REMOVE_ITEM", payload: itemId};
        const newState = itemsReducer(exampleState, action);

        expect(newState).toEqual(initialState);
    });

    test('should return the initial state', () => {

        const action = {type: "UNKNOWN"};
        const newState = itemsReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});