import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import GoodList from '../../components/GoodsList/GoodList';

const Cart = () => {
    const items = useSelector(state => state.items.items);

    return (
        <>
            <h2 className='page-title'>Shopping cart</h2>
            <GoodList data={items} inCart RenderItemComponent={CartItem}/>
        </>
    );
}
 
export default Cart;