import GoodList from '../../components/GoodsList/GoodList';
import CardItem from '../../components/CardItem/CardItem';
import CartItem from '../../components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ViewContex } from '../../contexts/ViewContext';

const Favorites = () => {
    const {view} = useContext(ViewContex);
    const favorites = useSelector(state => state.favorites.favorites);

    const renderedComponent = view === "cards" ? CardItem : CartItem;

    return (
        <>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={favorites} RenderItemComponent={renderedComponent}/>
        </>
    );
}
 
export default Favorites;