import GoodList from "../../components/GoodsList/GoodList";
import CardItem from '../../components/CardItem/CardItem';
import { useLocation, useOutletContext } from "react-router-dom";
import filterData from "../../helpers/filterData";

const Category = () => {
    const {goods, handleToggleModal, toggleFav, favorites, items} = useOutletContext();
    const {pathname} = useLocation();

    const filteredData = filterData(pathname, goods);

    return <GoodList data={filteredData || goods} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items} RenderItemComponent={CardItem}/>
}
 
export default Category;