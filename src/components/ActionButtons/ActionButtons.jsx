import Button from "../Button/Button";
import './ActionButtons.scss';
import PropTypes from 'prop-types';

function ActionButtons({ confirmBtn, closeBtn, backgroundColor, increaseFav, increaseItem, modal }) {

    return (
        <div className="action__btns">
            <Button text={confirmBtn} backgroundColor={backgroundColor} onClick={modal.id === 1 ? increaseItem : increaseFav}/>
            <Button text={closeBtn} backgroundColor={backgroundColor}/>
        </div>
    );
}

ActionButtons.propTypes = {
    confirmBtn: PropTypes.string.isRequired,
    closeBtn: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    increaseFav: PropTypes.func,
    increaseItem: PropTypes.func,
    modal: PropTypes.shape({
        id: PropTypes.number
    })
}

export default ActionButtons;