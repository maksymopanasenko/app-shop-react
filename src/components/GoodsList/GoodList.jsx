import PropTypes from 'prop-types';
import cn from 'classnames';
import './GoodList.scss';

const GoodList = ({data, RenderItemComponent, inCart}) => {
    const cards = data?.map(card => <RenderItemComponent key={card.article} card={card} />);

    return (
        <>
            {cards.length ? (
                <ul className={cn('list', {"goods-list": !inCart})}>
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
    data: PropTypes.array.isRequired
}
 
export default GoodList;