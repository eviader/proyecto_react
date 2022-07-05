
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/detail/Detail';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Routes>
        <Route path='detail/:id' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
