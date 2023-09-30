import CardItem from "../CardItem/CardItem";
import PropTypes from 'prop-types';
import './GoodList.scss';

const GoodList = ({data, onOpenFirstModal, onOpenSecondModal, favorites}) => {
    const cards = data?.map(card => <CardItem key={card.article} card={card} onOpenFirstModal={onOpenFirstModal} onOpenSecondModal={onOpenSecondModal} favorites={favorites}/>);

    return ( 
        <ul className="goods-list">
            {cards}
        </ul>
    );
}

GoodList.propTypes = {
    data: PropTypes.array.isRequired,
    onOpenFirstModal: PropTypes.func.isRequired,
    onOpenSecondModal: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired
}
 
export default GoodList;