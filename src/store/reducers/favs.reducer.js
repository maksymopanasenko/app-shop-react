const initialState = {
    favorites: []
}

const ADD_FAVS = "ADD_FAVS";
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const favsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVS:
            return {...state, favorites: [...state.favorites, ...action.payload]}
        case ADD_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]}
        case REMOVE_FAVORITE:
            return {...state, favorites: state.favorites.filter(({article}) => article !== action.payload)}
        default:
            return state;
    }
}


export const addFavsAC = (favs) => {
    return {
        type: ADD_FAVS,
        payload: favs
    }
}

export const addFavoriteAC = (favorite) => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const removeFavoriteAC = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export default favsReducer;