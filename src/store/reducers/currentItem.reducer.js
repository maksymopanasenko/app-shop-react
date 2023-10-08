const initialState = {
    currItem: null
}

const ADD_CURRENT_ITEM = "ADD_CURRENT_ITEM";

const currentItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_ITEM:
            return {...state, currItem: action.payload}
        default:
            return state;
    }
}

export const addCurrentItemAC = (item) => {
    return {
        type: ADD_CURRENT_ITEM,
        payload: item
    }
}

export default currentItemReducer;