import { useEffect, useState } from 'react'
import './App.css'
import sendRequest from './helpers/sendRequest'
import Header from './components/Header/Header';
import GoodList from './components/GoodsList/GoodList';
import Modal from './components/Modal/Modal';
import ActionButtons from './components/ActionButtons/ActionButtons';
import { modalData } from './sources/dataBase';

function App() {
  const [goods, setGoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [currItem, setCurrItem] = useState(null);

  const increaseFav = () => {
    const favs = favorites.filter(({article}) => article === currItem.article);

    if (!favs.length) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, currItem]));
      setFavorites([...favorites, currItem]);
    }
  };

  const increaseItem = () => {
    localStorage.setItem('items', JSON.stringify([...items, currItem]));
    setItems([...items, currItem]);
  };

  const handleOpenModal = () => setIsOpen(!isOpen);

  const handleToggleFirstModal = (id) => {
    setIsOpen(!isOpen);
    setModal(modalData.firstModal);

    const item = goods.filter(item => item.article === id);
    setCurrItem(...item);
  };

  const handleToggleSecondModal = (e, id) => {
    if (e.target || e.target.closest('.favorite-btn')) {
      setIsOpen(!isOpen);
      setModal(modalData.secondModal);
      
      const item = goods.filter(item => item.article === id);
      setCurrItem(...item);
    }
  };

  useEffect(() => {
    sendRequest('./goods-db.json')
      .then(data => setGoods(data));
  }, []);

  return (
    <>
      <Header favorites={favorites} items={items}/>
      <GoodList data={goods} onOpenFirstModal={handleToggleFirstModal} onOpenSecondModal={handleToggleSecondModal} favorites={favorites}/>
      {isOpen && (
        <Modal header={modal.header} text={modal.text} closeButton onCloseModal={handleOpenModal}>
          <ActionButtons confirmBtn='Ok' closeBtn='Cancel' increaseFav={increaseFav} increaseItem={increaseItem} modal={modal}/>
        </Modal>
      )}
    </>
  )
}

export default App;