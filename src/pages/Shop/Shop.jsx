import GoodList from '../../components/GoodsList/GoodList';
import PageContainer from '../../components/PageContainer/PageContainer';

const Shop = ({data, onOpenFirstModal, onOpenSecondModal, favorites, items}) => {
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={data} onOpenFirstModal={onOpenFirstModal} onOpenSecondModal={onOpenSecondModal} favorites={favorites}/>
        </PageContainer>
    );
}
 
export default Shop;