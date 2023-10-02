import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { modalData } from './sources/dataBase';
import sendRequest from './helpers/sendRequest';
import Modal from './components/Modal/Modal';
import ActionButtons from './components/ActionButtons/ActionButtons';
import Shop from './pages/Shop/Shop';
import MenShop from './pages/MenShop/MenShop';
import WomenShop from './pages/WomenShop/WomenShop';
import NoPage from './pages/NoPage/NoPage';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import './App.css';


function App() {
  const [goods, setGoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [currItem, setCurrItem] = useState(null);

  const increaseItem = () => {
    console.log(currItem);
    localStorage.setItem('items', JSON.stringify([...items, currItem]));
    setItems([...items, currItem]);
  };
  
  const deleteItem = () => {
    const restItems = items.filter(({article}) => article !== currItem.article);

    localStorage.setItem('items', JSON.stringify([...restItems]));
    setItems([...restItems]);
  }

  const toggleFav = (id) => {
    const fav = favorites.filter(({article}) => article !== id);

    if (fav.length === favorites.length) {
      const fav = goods.filter(({article}) => article === id);
      localStorage.setItem('favorites', JSON.stringify([...favorites, ...fav]));
      setFavorites([...favorites, ...fav]);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...fav]));
      setFavorites([...fav]);
    }
  }

  const handleCloseModal = () => setIsOpen(!isOpen);

  const handleToggleModal = (modalIndex, id) => {
    setIsOpen(!isOpen);
    setModal(modalData[modalIndex]);

    const item = goods.filter(item => item.article === id);
    setCurrItem(...item);
  };

  useEffect(() => {
    sendRequest('./goods-db.json')
      .then(data => setGoods(data));
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Shop data={goods} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items}/>} />
        <Route path='/shop' element={<Shop data={goods} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items} />} />
        <Route path='/men' element={<MenShop data={goods} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items} />} />
        <Route path='/women' element={<WomenShop data={goods} onToggleModal={handleToggleModal} onToggleFav={toggleFav} favorites={favorites} items={items} />} />
        <Route path='/favorites' element={<Favorites data={favorites} onToggleModal={handleToggleModal} onToggleFav={toggleFav} items={items} />} />
        <Route path='/cart' element={<Cart data={items} onToggleModal={handleToggleModal} favorites={favorites} />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      {isOpen && (
        <Modal header={modal.header} text={modal.text} closeButton onCloseModal={handleCloseModal}>
          <ActionButtons confirmBtn='Ok' closeBtn='Cancel' onIncreaseItem={increaseItem} onDeleteItem={deleteItem} modal={modal}/>
        </Modal>
      )}
    </>
  )
}

export default App;