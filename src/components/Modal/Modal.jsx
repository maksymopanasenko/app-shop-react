import { AiOutlineClose as CloseBtn } from 'react-icons/ai'
import PropTypes from 'prop-types';
import './Modal.scss';
import ButtonClose from '../ButtonClose/ButtonClose';

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