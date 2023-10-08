import './CustomerButton.scss';
import PropTypes from 'prop-types';

const CustomerButton = ({children, quantity}) => {
    return (
        <button className='customer-btn'>
            {children}
            {!!quantity && (<span>{quantity}</span>)}
        </button>
    );
}

CustomerButton.propTypes = {
    quantity: PropTypes.number,
    children: PropTypes.element
}
 
export default CustomerButton;