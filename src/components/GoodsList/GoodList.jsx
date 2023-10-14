import PropTypes from 'prop-types';
import cn from 'classnames';
import './GoodList.scss';
import { useContext } from 'react';
import { ViewContex } from '../../contexts/ViewContext';

const GoodList = ({data, RenderItemComponent, inCart}) => {
    const {view} = useContext(ViewContex);
    const cards = data?.map(card => <RenderItemComponent key={card.article} card={card} inCart={inCart}/>);

    return (
        <>
            {cards.length ? (
                <ul className={cn('list', {"list-goods": !inCart}, {"list-flex": view === "list"})}>
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