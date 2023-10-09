import { useSelector } from 'react-redux';
import './Total.scss';

const Total = () => {
    const price = useSelector(state => state.totalPrice.price)

    return ( 
        <div className="total">
            <div className="text-content">
                <p className='total-price'>Total Price <span className='total-value'>{price + ' PLN'}</span></p>
                
                <p className='total-shipment'>Shipment costs will be calculated at checkout</p>
            </div>
            <button className='order'>Place an order</button>
        </div>
    );
}
 
export default Total;