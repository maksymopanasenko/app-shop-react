import sendRequest from "../helpers/sendRequest";
import { addGoodsAC } from "../store/goods.reducer";

const fetchGoods = () => {
    return dispatch => {
        sendRequest('./goods-db.json')
            .then(data => dispatch(addGoodsAC(data)));
    }
}
 
export default fetchGoods;