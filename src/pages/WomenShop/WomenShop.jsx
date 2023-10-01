import PageContainer from "../../components/PageContainer/PageContainer";
import GoodList from "../../components/GoodsList/GoodList";

const MenShop = ( {data, onToggleModal, onToggleFav, favorites, items}) => {
    const filteredData = data.filter(({sex}) => sex === 'W');
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={filteredData} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={favorites}/>
        </PageContainer>
    )
}
 
export default MenShop;