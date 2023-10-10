import { useDispatch } from 'react-redux';
import { closeModalsAC } from '../../store/reducers/modal.reducer';

const Overlay = ({children}) => {
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if (e.target.className === 'overlay' ||
            e.target.nodeName === 'svg' ||
            e.target.closest('button')) 
                dispatch(closeModalsAC())
    }

    return ( 
        <div className="overlay" onClick={handleClose}>
            {children}
        </div>
    );
}
 
export default Overlay;