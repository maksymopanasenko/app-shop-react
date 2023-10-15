import { PiShoppingCartSimple as Cart } from 'react-icons/pi';
import { AiOutlineHeart as Heart } from 'react-icons/ai';
import CustomerButton from '../buttons/CustomerButton/CustomerButton';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ViewSelect from '../ViewSelect/ViewSelect';
import './Header.scss';

const Header = () => {
    const items = useSelector(state => state.items.items);
    const favorites = useSelector(state => state.favorites.favorites);

    return (
        <header className='header'>
            <div className="container">
                <div className="header-body">
                    <Navigation />
                    <div className="customer-btns">
                        <ViewSelect />
                        <Link to='/favorites'>
                            <CustomerButton quantity={favorites.length}>
                                <Heart />
                            </CustomerButton>
                        </Link>
                        <Link to='/cart'>
                            <CustomerButton quantity={items.length}>
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