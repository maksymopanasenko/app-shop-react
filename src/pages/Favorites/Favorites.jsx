import GoodList from '../../components/GoodsList/GoodList';
import CardItem from '../../components/CardItem/CardItem';
import ListItem from '../../components/ListItem/ListItem';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ViewContex } from '../../contexts/ViewContext';

const Favorites = () => {
    const {view} = useContext(ViewContex);
    const favorites = useSelector(state => state.favorites.favorites);

    const renderedComponent = view === "cards" ? CardItem : ListItem;

    return (
        <>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={favorites} RenderItemComponent={renderedComponent}/>
        </>
    );
}
 
export default Favorites;