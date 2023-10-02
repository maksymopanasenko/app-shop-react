import PageContainer from "../../components/PageContainer/PageContainer";
import GoodList from "../../components/GoodsList/GoodList";
import CardItem from '../../components/CardItem/CardItem';

const MenShop = ( {data, onToggleModal, onToggleFav, favorites, items}) => {
    const filteredData = data.filter(({sex}) => sex === 'W');
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={filteredData} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={favorites} RenderItemComponent={CardItem}/>
        </PageContainer>
    )
}
 
export default MenShop;