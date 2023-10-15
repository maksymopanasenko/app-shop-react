import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { openModalsAC, setModalAC } from '../../store/reducers/modal.reducer';
import { addCurrentItemAC } from '../../store/reducers/currentItem.reducer';
import { modalData } from '../../sources/dataBase';
import FavButton from '../buttons/FavButton/FavButton';
import Button from '../buttons/Button/Button';

import './CardItem.scss';

const CardItem = ({card}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const [isHovered, setIsHovered] = useState(false);
    const {name, price, color, urlImg, article} = card;

    const item = items.filter(item => item.article === article);

    const modalId = item.length ? 3 : 1;

    const handleCardModal = () => {
        dispatch(openModalsAC());
        
        const modalToShow = modalData.find(modal => modal.id === modalId);
        dispatch(setModalAC(modalToShow));
    
        dispatch(addCurrentItemAC(card));
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <li className="goods-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="goods-img">
                <FavButton card={card}/>
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