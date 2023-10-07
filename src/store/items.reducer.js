const initialState = {
    items: []
}

const ADD_ITEMS = "ADD_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {...state, items: [...state.items, ...action.payload]}
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]}
        case REMOVE_ITEM:
            return {...state, items: state.items.filter(({article}) => article !== action.payload)}
        default:
            return state;
    }
}


export const addItemsAC = (items) => {
    return {
        type: ADD_ITEMS,
        payload: items
    }
}

export const addItemAC = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const removeItemAC = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

export default itemsReducer;