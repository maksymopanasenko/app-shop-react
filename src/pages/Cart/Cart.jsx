import CartItem from '../../components/CartItem/CartItem';
import GoodList from '../../components/GoodsList/GoodList';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
    const {favorites, handleToggleModal, items} = useOutletContext();

    return (
        <>
            <h2 className='page-title'>Shopping cart</h2>
            <GoodList data={items} onToggleModal={handleToggleModal} favorites={favorites} items={items} inCart RenderItemComponent={CartItem}/>
        </>
    );
}
 
export default Cart;