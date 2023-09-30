import CardItem from "../CardItem/CardItem";
import './GoodList.scss';

const GoodList = ({data, onOpenModal, onOpenSecondModal}) => {
    const cards = data?.map(card => <CardItem key={card.article} card={card} onOpenModal={onOpenModal} onOpenSecondModal={onOpenSecondModal}/>);

    return ( 
        <ul className="goods-list">
            {cards}
        </ul>
     );
}
 
export default GoodList;