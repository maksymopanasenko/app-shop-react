import './Navigation.scss';
import logo from '../../sources/img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

const Navigation = () => {
    const {pathname} = useLocation();

    return ( 
        <>
            <nav className='nav'>
                <Link to="/" className='logo'>
                    <img src={logo} alt="logo" width={100}/>
                </Link>
                <ul className="nav-list">
                    <li>
                        <Link to="/" className={cn('nav-link', {active: pathname === '/'})}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/men" className={cn('nav-link', {active: pathname === '/men'})}>Men</Link>
                    </li>
                    <li>
                        <Link to="/women" className={cn('nav-link', {active: pathname === '/women'})}>Women</Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navigation;