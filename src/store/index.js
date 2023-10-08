import { composeWithDevTools } from "@redux-devtools/extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import goodsReducer from "./reducers/goods.reducer";
import favsReducer from "./reducers/favs.reducer";
import itemsReducer from "./reducers/items.reducer";
import currentItemReducer from "./reducers/currentItem.reducer";
import modalReducer from "./reducers/modal.reducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    favorites: favsReducer,
    items: itemsReducer,
    modal: modalReducer,
    currItem: currentItemReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));