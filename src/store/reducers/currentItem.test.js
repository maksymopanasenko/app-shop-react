import currentItemReducer from "./currentItem.reducer";
import { test, describe, expect } from "vitest";

describe("Test redux reducer for current item in the state", () => {
    const initialState = {
        currItem: null
    };

    test('it should add an item to the state', () => {
        const newItem = {
            name: "Shirt",
            price: 70,
            urlImg: "https://i.pinimg.com/originals/bf/4d/d2/bf4dd254f576f92a9740ede3659bf227.jpg",
            sex:  "M",
            article: 1054,
            color: "colorfull"
        };

        const action = {type: "ADD_CURRENT_ITEM", payload: newItem};
        const newState = currentItemReducer(initialState, action);

        expect(newState).toEqual({"currItem": newItem});
    });

    test('it should return the state', () => {
        const action = {type: "UNKNOWN"};
        const newState = currentItemReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});