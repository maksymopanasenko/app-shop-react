import { AiOutlineClose as CloseBtn } from 'react-icons/ai'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeModalsAC } from '../../store/reducers/modal.reducer';
import './Modal.scss';

function Modal({header, text, children}) {
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if (e.target.className === 'overlay' ||
            e.target.nodeName === 'svg' ||
            e.target.closest('button')) 
                dispatch(closeModalsAC())
    }

    return (
        <div className="overlay" onClick={handleClose}>
            <div className="modal">
                <button className='close__btn'><CloseBtn /></button>
                <h2 className='modal__header'>{header}</h2>
                <p className='modal__text'>{text}</p>
                <div className="modal__btns">
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Modal;