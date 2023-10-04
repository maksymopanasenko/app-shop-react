import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { modalData } from "../../sources/dataBase";
import sendRequest from "../../helpers/sendRequest";
import './Layout.scss';

const Layout = () => {
    const [goods, setGoods] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [items, setItems] = useState([]);
    const [currItem, setCurrItem] = useState(null);
  
    const increaseItem = () => {
      const itemInCart = items.find(item => item.article === currItem.article);
  
      if (itemInCart) return;
  
      const itemsKeys = items.map(item => item.article);
      localStorage.setItem('items', JSON.stringify([...itemsKeys, currItem.article]));
      setItems([...items, currItem]);
    };
    
    const deleteItem = () => {
      const restItems = items.filter(({article}) => article !== currItem.article);
      const restItemsKeys = restItems.map(item => item.article);
  
      localStorage.setItem('items', JSON.stringify([...restItemsKeys]));
      setItems([...restItems]);
    }
  
    const toggleFav = (id) => {
      const fav = favorites.filter(({article}) => article !== id);
      const favKeys = fav.map(item => item.article);
  
      if (fav.length === favorites.length) {
        const favItem = goods.find(({article}) => article === id);
        
        localStorage.setItem('favorites', JSON.stringify([...favKeys, favItem.article]));
        setFavorites([...favorites, favItem]);
      } else {
        localStorage.setItem('favorites', JSON.stringify([...favKeys]));
        setFavorites([...fav]);
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
      sendRequest('./goods-db.json')
        .then(data => {
          setGoods(data);
  
          const storageFavData = JSON.parse(localStorage.getItem('favorites')) || [];
          const favs = data.filter(({article}) => storageFavData.includes(article));
  
          setFavorites([...favs]);
  
          const storageItemData = JSON.parse(localStorage.getItem('items')) || [];
          const items = data.filter(({article}) => storageItemData.includes(article));
          setItems([...items]);
        });
    }, []);

    return ( 
        <>
          <Header items={items} favorites={favorites}/>
          
          <main className="main">
              <Outlet context={{goods, favorites, items, handleToggleModal, toggleFav}} />
          </main>
          
          {isOpen && (
              <Modal header={modal.header} text={modal.text} closeButton onCloseModal={handleCloseModal}>
                  <Button text="Ok" onClick={modal.id !== 2 ? increaseItem : deleteItem}/>
                  {modal.id !== 3 && <Button text="Cancel"/>}
              </Modal>
          )}
        </>
    );
}
 
export default Layout;