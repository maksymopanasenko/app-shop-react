import { useEffect, useState } from 'react'
import './App.css'
import sendRequest from './helpers/sendRequest'
import GoodList from './components/GoodsList/GoodList';
import Modal from './components/Modal/Modal';
import ActionButtons from './components/ActionButtons/ActionButtons';
import { modalData } from './sources/dataBase';

function App() {
  const [goods, setGoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({});

  const handleOpenModal = () => setIsOpen(!isOpen);

  const handleToggleFirstModal = () => {
    setIsOpen(!isOpen);
    setModal(modalData.firstModal);
  };

  const handleToggleSecondModal = () => {
    setIsOpen(!isOpen);
    setModal(modalData.secondModal);
  };

  useEffect(() => {
    sendRequest('./goods-db.json')
      .then(data => setGoods(data));
  }, []);

  return (
    <>
      <GoodList data={goods} onOpenModal={handleToggleFirstModal} onOpenSecondModal={handleToggleSecondModal}/>
      {isOpen && (
        <Modal header={modal.header} text={modal.text} closeButton  onCloseModal={handleOpenModal}>
          <ActionButtons confirmBtn='Ok' closeBtn='Cancel'/>
        </Modal>
      )}
    </>
  )
}

export default App
