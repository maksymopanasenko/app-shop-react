import CardItem from "../CardItem/CardItem";
import './GoodList.scss';

const GoodList = ({data}) => {
    const cards = data?.map(card => <CardItem key={card.article} card={card}/>);

    return ( 
        <ul className="goods-list">
            {cards}
        </ul>
     );
}
 
export default GoodList;