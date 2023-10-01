import Header from '../Header/Header';

const PageContainer = ({children, favorites, items}) => {
    return ( 
        <div className="page-container">
            <Header favorites={favorites} items={items}/>
            {children}
        </div>
    );
}
 
export default PageContainer;