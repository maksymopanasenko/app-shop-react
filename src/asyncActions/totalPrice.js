import { updateReloadAC } from "../store/reducers/totalPrice.reducer";


export const updateTotalPrice = (goods) => {
    return dispatch => {
        const totalPrice = goods.reduce((acc, curr) => acc + curr.price, 0);
        dispatch(updateReloadAC(totalPrice));
    }
}