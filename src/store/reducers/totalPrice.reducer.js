const initialState = {
    price: 0
}

const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

const totalReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {...state, price: state.price + action.payload}
        case DECREASE:
            return {...state, price: state.price - action.payload}
        default:
            return state;
    }
}


export const increaseTotalsAC = (price) => {
    return {
        type: INCREASE,
        payload: price
    }
}

export const decreaseTotalAC = (price) => {
    return {
        type: DECREASE,
        payload: price
    }
}

export default totalReducer;