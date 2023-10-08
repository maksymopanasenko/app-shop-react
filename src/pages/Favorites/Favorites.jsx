import GoodList from '../../components/GoodsList/GoodList';
import CardItem from '../../components/CardItem/CardItem';
import { useSelector } from 'react-redux';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites);

    return (
        <>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={favorites} RenderItemComponent={CardItem}/>
        </>
    );
}
 
export default Favorites;