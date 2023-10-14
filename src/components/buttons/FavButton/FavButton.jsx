import {AiOutlineStar as Star, AiFillStar as ColoredStar} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAC, removeFavoriteAC } from '../../../store/reducers/favs.reducer';


const FavButton = ({card}) => {
    const dispatch = useDispatch();
    const {article} = card;

    const favorites = useSelector(state => state.favorites.favorites);

    
    const favs = favorites.filter(item => item.article === article);

    const handleToggleFav = () => {
        const fav = favorites.filter(item => item.article !== article);
        const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];

        if (fav.length === favorites.length) {
            localStorage.setItem('favorites', JSON.stringify([...storedFavs, article]));  
            dispatch(addFavoriteAC(card));
        } else {
            localStorage.setItem('favorites', JSON.stringify(storedFavs.filter(storetItem => storetItem !== article)));
            dispatch(removeFavoriteAC(article))
        }
    }


    return (
        <button className='favorite-btn' onClick={handleToggleFav}>
            {!!favs.length ? <ColoredStar /> : <Star />}
        </button>
    );
}
 
export default FavButton;