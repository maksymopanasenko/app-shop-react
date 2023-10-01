import CardItem from "../CardItem/CardItem";
import PropTypes from 'prop-types';
import './GoodList.scss';

const GoodList = ({data, onToggleModal, onToggleFav, favorites, inCart}) => {
    const cards = data?.map(card => <CardItem key={card.article} card={card} onToggleModal={onToggleModal} onToggleFav={onToggleFav} favorites={favorites} inCart={inCart}/>);

    return ( 
        <>
            {cards.length ? (
                <ul className="goods-list">
                    {cards}
                </ul>
            ) : (
                <div className="no-items">
                    <p>No items have been added.</p>
                </div>
            )}
        </>
    );
}

GoodList.propTypes = {
    data: PropTypes.array.isRequired,
    onToggleModal: PropTypes.func,
    favorites: PropTypes.array.isRequired
}
 
export default GoodList;