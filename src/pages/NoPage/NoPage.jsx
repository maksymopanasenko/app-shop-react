import { Link } from "react-router-dom";
import './NoPage.scss';

const NoPage = () => {
    return ( 
        <div className="no-page">
            <div className="no-page-content">
                <p className="no-page-text">There is no such page...</p>
                <Link to='/'>Go to home page</Link>
            </div>
        </div>
    );
}
 
export default NoPage;