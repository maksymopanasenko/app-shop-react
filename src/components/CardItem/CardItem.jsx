import { useState } from 'react'
import './CardItem.scss';
import {AiOutlineStar as Star, AiFillStar as ColoredStar} from 'react-icons/ai';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteAC, removeFavoriteAC } from '../../store/reducers/favs.reducer';
import { openModalsAC, setModalAC } from '../../store/reducers/modal.reducer';
import { addCurrentItemAC } from '../../store/reducers/currentItem.reducer';
import { modalData } from '../../sources/dataBase';

const CardItem = ({card}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const favorites = useSelector(state => state.favorites.favorites);
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, color, urlImg, article} = card;

    const fav = favorites.filter(item => item.article === article);
    const item = items.filter(item => item.article === article);

    const modalId = item.length ? 3 : 1;

    const handleCardModal = () => {
        dispatch(openModalsAC());
        
        const modalToShow = modalData.find(modal => modal.id === modalId);
        dispatch(setModalAC(modalToShow));
    
        dispatch(addCurrentItemAC(card));
    };
      
    const handleToggleFav = () => {
        const fav = favorites.filter(item => item.article !== article);
        const storedFavs = JSON.parse(localStorage.getItem('favorites'));

        if (fav.length === favorites.length) {
            localStorage.setItem('favorites', JSON.stringify([...storedFavs, article]));  
            dispatch(addFavoriteAC(card));
        } else {
            localStorage.setItem('favorites', JSON.stringify(storedFavs.filter(storetItem => storetItem !== article)));
            dispatch(removeFavoriteAC(article))
        }
    }

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <li className="goods-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="goods-img">
                <button className='favorite-btn' onClick={handleToggleFav}>
                    {!!fav.length ? <ColoredStar /> : <Star />}
                </button>
                <img src={urlImg} width="270" height="393" alt={name} />
            </div>
            <div className='goods-info'>
                {isHovered ?
                    <Button text='Add to cart' onClick={handleCardModal}/> :
                    (<>
                        <p className='goods-title'>
                            {name}
                            <span className='goods-color'>color: {color}</span>
                        </p>
                        <p>{price + ' PLN'}</p>
                    </>)
                }
            </div>
        </li>
    );
}

CardItem.propTypes = {
    card: PropTypes.object.isRequired
}
 
export default CardItem;