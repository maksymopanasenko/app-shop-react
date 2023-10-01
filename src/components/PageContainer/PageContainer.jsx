import Header from '../Header/Header';
import './PageContainer.scss';

const PageContainer = ({children, favorites, items}) => {
    return ( 
        <div className="page-container">
            <Header favorites={favorites} items={items}/>
            <main style={{paddingTop: '90px'}}>
                {children}
            </main>
        </div>
    );
}
 
export default PageContainer;