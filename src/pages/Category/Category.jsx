import GoodList from "../../components/GoodsList/GoodList";
import CardItem from '../../components/CardItem/CardItem';
import { useLocation } from "react-router-dom";
import filterData from "../../helpers/filterData";
import { useSelector } from "react-redux";

const Category = () => {
    const goods = useSelector(state => state.goods.goods);
    const {pathname} = useLocation();

    const filteredData = filterData(pathname, goods);

    return <GoodList data={filteredData || goods} RenderItemComponent={CardItem}/>
}
 
export default Category;