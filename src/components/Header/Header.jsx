import { PiShoppingCartSimple as Cart } from 'react-icons/pi';
import { AiOutlineHeart as Heart } from 'react-icons/ai';
import './Header.scss';
import CustomerButton from '../CustomerButton/CustomerButton';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Header = ({items, favorites}) => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-body">
                    <Navigation />
                    <div className="customer-btns">
                        <Link to='/favorites'>
                            <CustomerButton mark={favorites}>
                                <Heart />
                            </CustomerButton>
                        </Link>
                        <Link to='/cart'>
                            <CustomerButton mark={items}>
                                <Cart />
                            </CustomerButton>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;