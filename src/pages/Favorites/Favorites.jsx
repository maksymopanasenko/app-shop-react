import GoodList from '../../components/GoodsList/GoodList';
import CardItem from '../../components/CardItem/CardItem';
import { useOutletContext } from 'react-router-dom';

const Favorites = () => {
    const {favorites, handleToggleModal, toggleFav, items} = useOutletContext();

    return (
        <>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={favorites} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items} RenderItemComponent={CardItem}/>
        </>
    );
}
 
export default Favorites;