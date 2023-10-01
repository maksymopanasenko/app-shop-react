import GoodList from '../../components/GoodsList/GoodList';
import PageContainer from '../../components/PageContainer/PageContainer';

const Shop = ({data, onToggleModal, onToggleFav, favorites, items}) => {
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={data} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={favorites}/>
        </PageContainer>
    );
}
 
export default Shop;