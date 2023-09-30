import './Button.scss';
import PropTypes from 'prop-types';

function Button({backgroundColor='#564356', text, onClick}) {
    return (
        <button className='btn' style={{ backgroundColor: backgroundColor}} onClick={onClick} >
            {text}
        </button>
    );
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;