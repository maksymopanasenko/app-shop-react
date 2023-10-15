import React from 'react';
import PropTypes from 'prop-types';
import ButtonClose from '../buttons/ButtonClose/ButtonClose';
import './Modal.scss';

function Modal({header, text, children}) {

    return (
        <div className="modal">
            <ButtonClose />
            <h2 className='modal__header'>{header}</h2>
            <p className='modal__text'>{text}</p>
            <div className="modal__btns">
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Modal;