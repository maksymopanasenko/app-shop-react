import GoodList from '../../components/GoodsList/GoodList';
import PageContainer from '../../components/PageContainer/PageContainer';

const Favorites = ({data, onOpenFirstModal, onToggleFav, items}) => {
    return (
        <PageContainer favorites={data} items={items}>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={data} onOpenFirstModal={onOpenFirstModal} onToggleFav={onToggleFav} favorites={data} items={items}/>
        </PageContainer>
    );
}
 
export default Favorites;