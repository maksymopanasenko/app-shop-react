import { addItemsAC } from "../store/items.reducer";

export const setItems = (goods) => {
    return dispatch => {
      const storageItemsData = JSON.parse(localStorage.getItem('items')) || [];
      const items = goods.filter(({article}) => storageItemsData.includes(article));
      dispatch(addItemsAC(items));
    }
}