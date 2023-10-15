import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/buttons/Button/Button";
import fetchGoods from "../../asyncActions/goods";
import { useDispatch, useSelector } from "react-redux";
import { addItemAC, removeItemAC } from "../../store/reducers/items.reducer";
import { setFavorites } from "../../asyncActions/favorites";
import { setItems } from "../../asyncActions/items";
import { createPortal } from "react-dom";
import cn from 'classnames';
import { updateTotalPrice } from "../../asyncActions/totalPrice";
import Overlay from "../../components/Overlay/Overlay";
import CheckoutForm from "../../components/Form/Form";
import { ViewContex } from "../../contexts/ViewContext";

import './Layout.scss';

const Layout = () => {
    const isOpen = useSelector(state => state.modal.isOpen);
    const modal = useSelector(state => state.modal.modal);
    const currItem = useSelector(state => state.currItem.currItem);
    const goods = useSelector(state => state.goods.goods);
    const items = useSelector(state => state.items.items);
    const checkout = useSelector(state => state.modal.isCheckout);
    const [view, setView] = useState('cards');
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const addItem = () => {
      const itemInCart = items.find(item => item.article === currItem.article);
  
      if (itemInCart) return;

      const itemsKeys = JSON.parse(localStorage.getItem('items')) || [];
      localStorage.setItem('items', JSON.stringify([...itemsKeys, currItem.article]));
      
      dispatch(addItemAC(currItem));
    };
    
    const deleteItem = () => {
      const restItems = items.filter(({article}) => article !== currItem.article);
      const restItemsKeys = restItems.map(item => item.article);
  
      localStorage.setItem('items', JSON.stringify([...restItemsKeys]));
      dispatch(removeItemAC(currItem.article));
    }

    useEffect(() => {
      dispatch(fetchGoods());
    }, []);

    useEffect(() => {
      dispatch(setFavorites(goods));
      dispatch(setItems(goods));
    }, [goods]);

    useEffect(() => {
      dispatch(updateTotalPrice(items));
    }, [items]);

    return ( 
        <>
          <ViewContex.Provider value={{view, setView}}>
            <Header />
            
            <main className="main">
              <div className={cn('container', {"container-cart": pathname === '/cart'})}>
                <Outlet />
              </div>
            </main>
          </ViewContex.Provider>
          

          {isOpen && createPortal(
              <Overlay>
                {
                  checkout ?
                  <CheckoutForm /> :
                  (<Modal header={modal.header} text={modal.text} >
                    <Button text="Ok" onClick={modal.id !== 2 ? addItem : deleteItem}/>
                    {modal.id !== 3 && <Button text="Cancel"/>}
                  </Modal>)
                }
              </Overlay>,
              document.body
          )}
        </>
    );
}
 
export default Layout;