const initialState = {
    isOpen: false,
    modal: null
}

const OPEN = "OPEN";
const CLOSE = "CLOSE";
const OPEN_MODAL = "OPEN_MODAL";

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return {...state, isOpen: true}
        case CLOSE:
            return {...state, isOpen: false}
        case OPEN_MODAL:
            return {...state, modal: action.payload}
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

export default modalReducer;