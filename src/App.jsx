import { Routes, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
import NoPage from './pages/NoPage/NoPage';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import './App.css';
import Layout from './pages/Layout/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Category />} />
          <Route path='men' element={<Category />} />
          <Route path='women' element={<Category />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;