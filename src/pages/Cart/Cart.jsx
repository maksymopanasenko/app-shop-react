import CartItem from '../../components/CartItem/CartItem';
import GoodList from '../../components/GoodsList/GoodList';
import PageContainer from '../../components/PageContainer/PageContainer';

const Cart = ({data, onToggleModal, favorites}) => {
    return (
        <PageContainer favorites={favorites} items={data}>
            <h2 className='page-title'>Shopping cart</h2>
            <GoodList data={data} onToggleModal={onToggleModal} favorites={favorites} items={data} inCart RenderItemComponent={CartItem}/>
        </PageContainer>
    );
}
 
export default Cart;