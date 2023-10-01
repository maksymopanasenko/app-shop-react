import PageContainer from "../../components/PageContainer/PageContainer";
import GoodList from "../../components/GoodsList/GoodList";

const MenShop = ( {data, onOpenFirstModal, onOpenSecondModal, favorites, items}) => {
    const filteredData = data.filter(({sex}) => sex === 'M');
    return (
        <PageContainer favorites={favorites} items={items}>
            <GoodList data={filteredData} onOpenFirstModal={onOpenFirstModal} onOpenSecondModal={onOpenSecondModal} favorites={favorites}/>
        </PageContainer>
    )
}
 
export default MenShop;