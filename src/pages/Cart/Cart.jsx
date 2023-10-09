import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import GoodList from '../../components/GoodsList/GoodList';
import './Cart.scss';
import Total from '../../components/Total/Total';

const Cart = () => {
    const items = useSelector(state => state.items.items);

    return (
        <div className='cart-holder'>
            <h2 className='page-title cart-title'>Shopping cart</h2>
            <GoodList data={items} inCart RenderItemComponent={CartItem}/>
            <Total />   
        </div>
    );
}
 
export default Cart;