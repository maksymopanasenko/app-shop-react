import { PiShoppingCartSimple as Cart } from 'react-icons/pi';
import { AiOutlineHeart as Heart } from 'react-icons/ai';
import './Header.scss';
import CustomerButton from '../CustomerButton/CustomerButton';

const Header = ({items, favorites}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-body">
                    <div className="customer-btns">
                        <CustomerButton mark={favorites}>
                            <Heart />
                        </CustomerButton>
                        <CustomerButton mark={items}>
                            <Cart />
                        </CustomerButton>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;