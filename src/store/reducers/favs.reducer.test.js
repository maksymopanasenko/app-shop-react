import favsReducer from "./favs.reducer";
import { test, describe, expect } from "vitest";

describe("redux totalPrice reducer for the price in the state", () => {
    const initialState = {
        favorites: []
    };

    test('should add all favorites', () => {
        const newFavorites = [
            { name: "Jeans", price: 140},
            { name: "Shirt", price: 70},
        ];
        
        const action = {type: "ADD_FAVS", payload: newFavorites};
        const newState = favsReducer(initialState, action);

        expect(newState).toEqual({"favorites": newFavorites});
    });

    test('should add a favorite', () => {
        const newFavorite = { name: "Jeans", price: 140 };
        
        const action = {type: "ADD_FAVORITE", payload: newFavorite};
        const newState = favsReducer(initialState, action);

        expect(newState).toEqual({"favorites": [newFavorite]});
    });

    test('should remove a favorite', () => {
        const exampleState = {
            favorites: [{ name: "Jeans", price: 140, article: 1034 }]
        };

        const favoriteId = 1034;
        
        const action = {type: "REMOVE_FAVORITE", payload: favoriteId};
        const newState = favsReducer(exampleState, action);

        expect(newState).toEqual({"favorites": []});
    });

    test('should return the initial state', () => {

        const action = {type: "UNKNOWN"};
        const newState = favsReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});