const initialState = {
    isOpen: false,
    isCheckout: false,
    modal: null
}

const OPEN = "OPEN";
const CLOSE = "CLOSE";
const OPEN_MODAL = "OPEN_MODAL";
const OPEN_CHECKOUT = "OPEN_CHECKOUT";

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return {...state, isOpen: true}
        case CLOSE:
            return {...state, isOpen: false, isCheckout: false}
        case OPEN_MODAL:
            return {...state, modal: action.payload}
        case OPEN_CHECKOUT:
            return {...state, isOpen: true, isCheckout: true}
        default:
            return state;
    }
}


export const openModalsAC = () => {
    return {
        type: OPEN
    }
}

export const closeModalsAC = () => {
    return {
        type: CLOSE
    }
}

export const setModalAC = (modal) => {
    return {
        type: OPEN_MODAL,
        payload: modal
    }
}

export const setCheckoutAC = () => {
    return {
        type: OPEN_CHECKOUT
    }
}

export default modalReducer;