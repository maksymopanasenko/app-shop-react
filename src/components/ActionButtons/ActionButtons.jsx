import Button from "../Button/Button";
import './ActionButtons.scss';
import PropTypes from 'prop-types';

function ActionButtons({ confirmBtn, closeBtn, backgroundColor }) {
    return (
        <div className="action__btns">
            <Button text={confirmBtn} backgroundColor={backgroundColor}/>
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