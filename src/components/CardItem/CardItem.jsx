import { useState } from 'react'
import './CardItem.scss';
import {AiOutlineStar as Star, AiFillStar as ColoredStar} from 'react-icons/ai';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const CardItem = ({card, onToggleModal, onToggleFav, favorites, items}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, color, urlImg, article} = card;
    const fav = favorites.filter(item => item?.article === article);
    const item = items.filter(item => item.article === article);

    const modalId = item.length ? 3 : 1;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <li className="goods-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="goods-img">
                <button className='favorite-btn' onClick={() => onToggleFav(article)}>
                    {!!fav.length ? <ColoredStar /> : <Star />}
                </button>
                <img src={urlImg} width="270" height="393" alt={name} />
            </div>
            <div className='goods-info'>
                {isHovered ?
                    <Button text='Add to cart' onClick={() => onToggleModal(modalId, article)}/> :
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
    card: PropTypes.object.isRequired,
    favorites: PropTypes.array.isRequired
}
 
export default CardItem;