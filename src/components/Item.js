import './Item.css'
import { Link } from 'react-router-dom'

function Item(props){
    //const productosImagen = require.context('./assets/imgArt', true);
    return(
        <>
            <div className='card'>
                <h6 className='card-title'>{props.name}</h6> 
                <h5 className='card-text text-secundary'>{props.birthday}</h5>
                <Link to={`/detail/${props.char_id}`} ></Link>
                <p>{props.char_id}</p>
                <button type="button" className="btn btn-secondary">Agregar al carrito</button>
            </div>  
        </>
    );
}

export default Item;