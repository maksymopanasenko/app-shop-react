const CustomerButton = ({children, mark}) => {
    return (
        <button className='customer-btn'>
            {children}
            {!!mark.length && (<span>{mark.length}</span>)}
        </button>
     );
}
 
export default CustomerButton;