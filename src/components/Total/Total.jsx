import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import './Total.scss';
import { setCheckoutAC } from '../../store/reducers/modal.reducer';

const Total = () => {
    const dispatch = useDispatch();
    const price = useSelector(state => state.totalPrice.price)

    const handleOpenForm = () => {
        dispatch(setCheckoutAC());
    }

    return ( 
        <div className="total">
            <div className="text-content">
                <p className='total-price'>Total Price <span className='total-value'>{price + ' PLN'}</span></p>
                
                <p className='total-shipment'>Shipment costs will be calculated at checkout</p>
            </div>
            <Button text="Place an order" disabled={!price} onClick={handleOpenForm}/>
        </div>
    );
}
 
export default Total;