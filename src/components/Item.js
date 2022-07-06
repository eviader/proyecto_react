import './Item.css'
import { Link } from 'react-router-dom'


function Item(props){

    //const productosImagen = require.context('./assets/imgArt', true);

    return(
        <>
            <div className='card-id'>
                <h4>{props.card}</h4> 
                <img className='img-url' src= {`${props.img}`} ></img>
                <h5>{props.modelo}</h5>
                <p>{props.precio}</p>
                <Link to={`/detail/${props.precio}`}><button type="button" className="btn btn-secondary">Ver mas</button></Link>
            </div>  
        </>
    );
}

export default Item;