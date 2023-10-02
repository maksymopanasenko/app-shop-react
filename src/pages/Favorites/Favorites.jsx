import GoodList from '../../components/GoodsList/GoodList';
import PageContainer from '../../components/PageContainer/PageContainer';
import CardItem from '../../components/CardItem/CardItem';

const Favorites = ({data, onToggleModal, onToggleFav, items}) => {
    return (
        <PageContainer favorites={data} items={items}>
            <h2 className='page-title'>Favorites</h2>
            <GoodList data={data} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={data} items={items} RenderItemComponent={CardItem}/>
        </PageContainer>
    );
}
 
export default Favorites;