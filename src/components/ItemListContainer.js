import './ItemListContainer.css';
import ItemList from './ItemList'
import { useState, useEffect } from 'react';



function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    fetch('https://www.breakingbadapi.com/api/characters')
    .then((resp) => resp.json())
    .then((data) => setProductos(data))
  }, []);


  return(
      <>
        <ItemList items={productos}/>
      </>
  );
  }
  

export default ItemListContainer;