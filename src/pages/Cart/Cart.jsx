import CartItem from '../../components/CartItem/CartItem';
import GoodList from '../../components/GoodsList/GoodList';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
    const {handleToggleModal, items} = useOutletContext();

    return (
        <>
            <h2 className='page-title'>Shopping cart</h2>
            <GoodList data={items} onToggleModal={handleToggleModal} inCart RenderItemComponent={CartItem}/>
        </>
    );
}
 
export default Cart;