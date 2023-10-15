import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button({ text, disabled, onClick }) {
    return (
        <button className='btn' disabled={disabled} onClick={onClick} data-testid="Button">
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;