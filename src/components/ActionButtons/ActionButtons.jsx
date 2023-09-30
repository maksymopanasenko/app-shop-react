import Button from "../Button/Button";
import './ActionButtons.scss';
import PropTypes from 'prop-types';

function ActionButtons({ confirmBtn, closeBtn, backgroundColor, increaseFav, increaseItem, modal }) {

    const currentModal = modal.id;

    return (
        <div className="action__btns">
            <Button text={confirmBtn} backgroundColor={backgroundColor} onClick={currentModal === 1 ? increaseItem : increaseFav}/>
            <Button text={closeBtn} backgroundColor={backgroundColor}/>
        </div>
    );
}

ActionButtons.propTypes = {
    confirmBtn: PropTypes.string,
    closeBtn: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default ActionButtons;