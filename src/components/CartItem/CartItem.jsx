import './CartItem.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { modalData } from '../../sources/dataBase';
import { useDispatch } from 'react-redux';
import { openModalsAC, setModalAC } from '../../store/reducers/modal.reducer';
import { addCurrentItemAC } from '../../store/reducers/currentItem.reducer';

const CartItem = ({card}) => {
    const dispatch = useDispatch();
    const {name, price, color, urlImg} = card;

    const openCartModal = () => {
        dispatch(openModalsAC());

        const modalToShow = modalData.find(modal => modal.id === 2);
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
            
            <Button text='Delete' onClick={openCartModal}/>
        </li>
    );
}

CartItem.propTypes = {
    card: PropTypes.object.isRequired
}
 
export default CartItem;