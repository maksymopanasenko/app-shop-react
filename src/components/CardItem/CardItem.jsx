import { useState } from 'react'
import './CardItem.scss';
import {AiOutlineStar as Star, AiFillStar as ColoredStar} from 'react-icons/ai';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const CardItem = ({card, onOpenFirstModal, onOpenSecondModal, favorites}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, color, urlImg, article} = card;
    const fav = favorites.filter(item => item?.article === article);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <li className="goods-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="goods-img">
                <button className='favorite-btn' onClick={(e) => onOpenSecondModal(e, article)}>
                    {!!fav.length ? <ColoredStar /> : <Star />}
                </button>
                <img src={urlImg} width="270" height="393" alt={name + article} />
            </div>
            <div className='goods-info'>
                {isHovered ?
                    (<Button text='Add to cart' onClick={() => onOpenFirstModal(article)}/>) :
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
    onOpenFirstModal: PropTypes.func.isRequired,
    onOpenSecondModal: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired
}
 
export default CardItem;