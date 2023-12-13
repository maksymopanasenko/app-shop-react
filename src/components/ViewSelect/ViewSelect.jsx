import { useContext } from 'react';
import './ViewSelect.scss';
import { ViewContex } from '../../contexts/ViewContext';

const ViewSelect = () => {
    const {view, setView} = useContext(ViewContex);

    const handleSelect = (e) => {
        setView(e.target.value);
    }

    return (
        <div className='view'>
            <select name="view" id="view-select" className='view-select' defaultValue={view} onChange={handleSelect}>
                <option value="list">List</option>
                <option value="cards">Cards</option>
            </select>
        </div>
    );
}
 
export default ViewSelect;