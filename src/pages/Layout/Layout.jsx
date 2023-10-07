import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { modalData } from "../../sources/dataBase";
import { useDispatch, useSelector } from "react-redux";
import fetchGoods from "../../asyncActions/goods";
import { addFavoriteAC, removeFavoriteAC } from "../../store/favs.reducer";
import { addItemAC, removeItemAC } from "../../store/items.reducer";
import { setFavorites } from "../../asyncActions/favorites";
import { setItems } from "../../asyncActions/items";

import './Layout.scss';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({});
    const [currItem, setCurrItem] = useState(null);
    const goods = useSelector(store => store.goods.goods);
    const favorites = useSelector(store => store.favorites.favorites);
    const items = useSelector(store => store.items.items);
    const dispatch = useDispatch();

    const addItem = () => {
      const itemInCart = items.find(item => item.article === currItem.article);
  
      if (itemInCart) return;
  
      const itemsKeys = items.map(item => item.article);
      localStorage.setItem('items', JSON.stringify([...itemsKeys, currItem.article]));
      
      dispatch(addItemAC(currItem))
    };
    
    const deleteItem = () => {
      const restItems = items.filter(({article}) => article !== currItem.article);
      const restItemsKeys = restItems.map(item => item.article);
  
      localStorage.setItem('items', JSON.stringify([...restItemsKeys]));
      dispatch(removeItemAC(currItem.article))
    }
  
    const toggleFav = (id) => {
      const fav = favorites.filter(({article}) => article !== id);
      const favKeys = fav.map(item => item.article);
  
      if (fav.length === favorites.length) {
        const favItem = goods.find(({article}) => article === id);
        
        localStorage.setItem('favorites', JSON.stringify([...favKeys, favItem.article]));  
        dispatch(addFavoriteAC(favItem))
      } else {
        localStorage.setItem('favorites', JSON.stringify([...favKeys]));
        dispatch(removeFavoriteAC(id))
      }
    }
  
    const handleCloseModal = () => setIsOpen(!isOpen);
  
    const handleToggleModal = (modalIndex, id) => {
      setIsOpen(!isOpen);
  
      const modalToShow = modalData.find(modal => modal.id === modalIndex);
      setModal(modalToShow);
  
      const item = goods.find(item => item.article === id);
      setCurrItem(item);
    };

    useEffect(() => {
      dispatch(fetchGoods());
    }, []);

    useEffect(() => {
      dispatch(setFavorites(goods));
      dispatch(setItems(goods));
    }, [goods]);

    return ( 
        <>
          <Header items={items} favorites={favorites}/>
          
          <main className="main">
              <Outlet context={{goods, favorites, items, handleToggleModal, toggleFav}} />
          </main>
          
          {isOpen && (
              <Modal header={modal.header} text={modal.text} closeButton onCloseModal={handleCloseModal}>
                  <Button text="Ok" onClick={modal.id !== 2 ? addItem : deleteItem}/>
                  {modal.id !== 3 && <Button text="Cancel"/>}
              </Modal>
          )}
        </>
    );
}
 
export default Layout;