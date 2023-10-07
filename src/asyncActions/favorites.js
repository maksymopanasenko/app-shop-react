import { addFavsAC } from "../store/favs.reducer";

export const setFavorites = (goods) => {
    return dispatch => {
      const storageFavData = JSON.parse(localStorage.getItem('favorites')) || [];
      const favs = goods.filter(({article}) => storageFavData.includes(article));
      dispatch(addFavsAC(favs));
    }
}