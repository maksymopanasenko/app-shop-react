import './CustomerButton.scss';
import PropTypes from 'prop-types';

const CustomerButton = ({children, mark}) => {
    return (
        <button className='customer-btn'>
            {children}
            {!!mark.length && (<span>{mark.length}</span>)}
        </button>
    );
}

CustomerButton.propTypes = {
    mark: PropTypes.array,
    children: PropTypes.element
}
 
export default CustomerButton;