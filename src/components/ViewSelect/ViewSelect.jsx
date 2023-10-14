import { useContext } from 'react';
import './ViewSelect.scss';
import { ViewContex } from '../../contexts/ViewContext';

const ViewSelect = () => {
    const {setView} = useContext(ViewContex);

    const handleSelect = (e) => {
        setView(e.target.value);
    }

    return (
        <div className='view'>
            <select name="view" id="view-select" className='view-select' defaultValue="cards" onChange={handleSelect}>
                <option value="list">List</option>
                <option value="cards">Cards</option>
            </select>
        </div>
    );
}
 
export default ViewSelect;