import CardItem from "../CardItem/CardItem";
import './GoodList.scss';

const GoodList = ({data, onOpenFirstModal, onOpenSecondModal, favorites}) => {
    const cards = data?.map(card => <CardItem key={card.article} card={card} onOpenFirstModal={onOpenFirstModal} onOpenSecondModal={onOpenSecondModal} favorites={favorites}/>);

    return ( 
        <ul className="goods-list">
            {cards}
        </ul>
     );
}
 
export default GoodList;