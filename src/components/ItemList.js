import { useEffect, useState } from "react";
import Item from "./Item"




function ItemList(){

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setProductos(data))
    }, []);

    return(
        <div className='container'>
            <div className='row'>
                {   
                    productos.map(producto  => (
                        <div className='col-md-3' key={producto.id}>
                            <Item marca={producto.marca} modelo={producto.modelo} precio={producto.precio} imagen={producto.img}/>
                        </div> 
                    ))
                }
            </div>
        </div>
        );
}

export default ItemList;