const initialState = {
    goods: []
}

const ADD_GOODS = "ADD_GOODS";

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOODS:
            return {...state, goods: [...state.goods, ...action.payload]}
        default:
            return state;
    }
}


export const addGoodsAC = (goods) => {
    return {
        type: ADD_GOODS,
        payload: goods
    }
}

export default goodsReducer;