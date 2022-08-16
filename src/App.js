
import './App.css';
import ItemListContainer from './components/items/ItemListContainer';
import Navbar from './components/Navbar';
import Cart from './components/cart/Cart'
import { Routes, Route } from 'react-router-dom';
import Detail from './components/detail/Detail';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}></Route>
        <Route exact path='/inicio' element={<ItemListContainer />}></Route>
        <Route exact path='/detail/:id' element={<Detail />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
