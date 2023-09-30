import './Modal.scss';
import { AiOutlineClose as CloseBtn } from 'react-icons/ai'
import PropTypes from 'prop-types';

function Modal({header, text, closeButton, onCloseModal, children}) {

    const handleClose = (e) => {
        if (e.target.className === 'overlay' ||
            e.target.nodeName === 'svg' ||
            e.target.closest('button')) 
            onCloseModal();
    }

    return (
        <div className="overlay" onClick={handleClose}>
            <div className="modal">
                {closeButton && <button className='close__btn'><CloseBtn /></button>}
                <h2 className='modal__header'>{header}</h2>
                <p className='modal__text'>{text}</p>
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