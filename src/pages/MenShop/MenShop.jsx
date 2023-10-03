import PageContainer from "../../components/PageContainer/PageContainer";
import GoodList from "../../components/GoodsList/GoodList";
import CardItem from '../../components/CardItem/CardItem';

const MenShop = ( {data, onToggleModal, onToggleFav, favorites, items}) => {
    const filteredData = data.filter(({sex}) => sex === 'M');
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={filteredData} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={favorites} items={items} RenderItemComponent={CardItem}/>
        </PageContainer>
    )
}
 
export default MenShop;