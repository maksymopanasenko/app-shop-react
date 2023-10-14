import './CartItem.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { modalData } from '../../sources/dataBase';
import { useDispatch } from 'react-redux';
import { openModalsAC, setModalAC } from '../../store/reducers/modal.reducer';
import { addCurrentItemAC } from '../../store/reducers/currentItem.reducer';
import FavButton from '../buttons/FavButton/FavButton';

const CartItem = ({card, inCart}) => {
    const dispatch = useDispatch();
    const {name, price, color, urlImg} = card;

    const modalId = inCart ? 2 : 1;
    const btnText = inCart ? "Delete" : "Add to cart";

    const openCartModal = () => {
        dispatch(openModalsAC());

        const modalToShow = modalData.find(modal => modal.id === modalId);
        dispatch(setModalAC(modalToShow));
    
        dispatch(addCurrentItemAC(card));
    };

    return (
        <li className="cart-item">
            <div className="cart-info">
                <img src={urlImg} width="80" height="120" alt={name} />
                
                <p className='cart-title'>
                    <span className='cart-item-name'>{name}</span>
                    <span className='cart-color'>color: {color}</span>
                </p>
                <span className='cart-price'>{price + ' PLN'}</span>
            </div>
            <div className='buttons'>
                {!inCart && <FavButton card={card}/>}
                <Button text={btnText} onClick={openCartModal}/>
            </div>
        </li>
    );
}

CartItem.propTypes = {
    card: PropTypes.object.isRequired
}
 
export default CartItem;