import Button from "../Button/Button";
import './ActionButtons.scss';
import PropTypes from 'prop-types';

function ActionButtons({ confirmBtn, closeBtn, onDeleteItem, onIncreaseItem, modal }) {
    return (
        <div className="action__btns">
            <Button text={confirmBtn} onClick={modal.id === 1 ? onIncreaseItem : onDeleteItem}/>
            <Button text={closeBtn}/>
        </div>
    );
}

ActionButtons.propTypes = {
    confirmBtn: PropTypes.string.isRequired,
    closeBtn: PropTypes.string.isRequired,
    increaseFav: PropTypes.func,
    increaseItem: PropTypes.func,
    modal: PropTypes.shape({
        id: PropTypes.number
    })
}

export default ActionButtons;