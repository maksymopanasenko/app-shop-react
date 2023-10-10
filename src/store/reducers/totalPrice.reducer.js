const initialState = {
    price: 0
}

const UPDATE_PRICE = "UPDATE_PRICE"

const totalReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRICE:
            return {...state, price: action.payload}
        default:
            return state;
    }
}

export const updateReloadAC = (price) => {
    return {
        type: UPDATE_PRICE,
        payload: price
    }
}

export default totalReducer;