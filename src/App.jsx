import { useEffect, useState } from 'react'
import './App.css'
import sendRequest from './helpers/sendRequest'
import GoodList from './components/GoodsList/GoodList';

function App() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    sendRequest('./goods-db.json')
      .then(data => setGoods(data));
  }, []);

  return (
    <div>
      <GoodList data={goods}/>
    </div>
  )
}

export default App
