import './CartItem.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const CartItem = ({card, onToggleModal}) => {
    const {name, price, color, urlImg, article} = card;

    return (
        <li className="cart-item">
            <div className="cart-info">
                <img src={urlImg} width="120" height="160" alt={name} />
                
                <p className='cart-title'>
                    <span className='cart-item-name'>{name}</span>
                    <span className='cart-color'>color: {color}</span>
                </p>
                <span className='cart-price'>{price + ' PLN'}</span>
            </div>
            
            <Button text='Delete' onClick={() => onToggleModal(1, article)}/>
        </li>
    );
}

CartItem.propTypes = {
    card: PropTypes.object.isRequired,
    onToggleModal: PropTypes.func.isRequired
}
 
export default CartItem;