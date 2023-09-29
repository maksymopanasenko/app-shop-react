import './CardItem.scss';

const CardItem = ({card}) => {
    const {name, price, urlImg, article} = card;

    return (
        <li className="goods-item">
            <img src={urlImg} width="270" height="393" alt={name + article} />
            <p>{name}</p>
            <p>{price}</p>
        </li>
    );
}
 
export default CardItem;