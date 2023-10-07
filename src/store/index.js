import { composeWithDevTools } from "@redux-devtools/extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import goodsReducer from "./goods.reducer";
import thunk from "redux-thunk";
import favsReducer from "./favs.reducer";
import itemsReducer from "./items.reducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    favorites: favsReducer,
    items: itemsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));