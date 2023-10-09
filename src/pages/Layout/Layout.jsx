import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import fetchGoods from "../../asyncActions/goods";
import { useDispatch, useSelector } from "react-redux";
import { addItemAC, removeItemAC } from "../../store/reducers/items.reducer";
import { setFavorites } from "../../asyncActions/favorites";
import { setItems } from "../../asyncActions/items";
import { createPortal } from "react-dom";
import cn from 'classnames';
import './Layout.scss';
import { decreaseTotalAC, increaseTotalsAC } from "../../store/reducers/totalPrice.reducer";

const Layout = () => {
    const isOpen = useSelector(state => state.modal.isOpen);
    const modal = useSelector(store => store.modal.modal);
    const currItem = useSelector(store => store.currItem.currItem);
    const goods = useSelector(store => store.goods.goods);
    const items = useSelector(store => store.items.items);
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const addItem = () => {
      const itemInCart = items.find(item => item.article === currItem.article);
  
      if (itemInCart) return;

      const itemsKeys = JSON.parse(localStorage.getItem('items'));
      localStorage.setItem('items', JSON.stringify([...itemsKeys, currItem.article]));
      
      dispatch(addItemAC(currItem));
      dispatch(increaseTotalsAC(currItem.price));
    };
    
    const deleteItem = () => {
      const restItems = items.filter(({article}) => article !== currItem.article);
      const restItemsKeys = restItems.map(item => item.article);
  
      localStorage.setItem('items', JSON.stringify([...restItemsKeys]));
      dispatch(removeItemAC(currItem.article));
      dispatch(decreaseTotalAC(currItem.price));
    }

    useEffect(() => {
      dispatch(fetchGoods());
    }, []);

    useEffect(() => {
      dispatch(setFavorites(goods));
      dispatch(setItems(goods));
    }, [goods]);

    return ( 
        <>
          <Header />
          
          <main className="main">
            <div className={cn('container', {"container-cart": pathname === '/cart'})}>
              <Outlet />
            </div>
          </main>

          {isOpen && createPortal(
              (<Modal header={modal.header} text={modal.text} >
                  <Button text="Ok" onClick={modal.id !== 2 ? addItem : deleteItem}/>
                  {modal.id !== 3 && <Button text="Cancel"/>}
              </Modal>),
              document.body
          )}
        </>
    );
}
 
export default Layout;