import './ItemListContainer.css';
import ItemList from './ItemList'
import { useEffect } from 'react';
import { useState } from 'react';



function ItemListContainer() {

  const [item, setItem] = useState([])

  useEffect(()=>{
    fetch('https://breakingbadapi.com/api/characters')
    .then((resp) => resp.json())
    .then((data) => setItem(data))
  }, []);

  return(
      <div>
        <ItemList items={item}/>
      </div>
  );
  }
  

export default ItemListContainer;