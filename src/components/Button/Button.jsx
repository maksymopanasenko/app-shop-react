import './Button.scss';
import PropTypes from 'prop-types';

function Button({ text, disabled, onClick }) {
    return (
        <button className='btn' disabled={disabled} onClick={onClick} >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;