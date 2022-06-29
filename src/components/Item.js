import React, {Fragment} from 'react'
import './Item.css'

function Item(props){

    const productosImagen = require.context('./assets/imgArt', true);

    return(
        <Fragment>
            <div className='card'>
                <div className='card-body'>
                    <img id='img1' src={productosImagen(`./${props.imagen}.png`)}></img>
                    <h6 className='card-title'>{props.marca}</h6>
                    <h5 className='card-text text-secundary'>{props.modelo}</h5>
                    <p>${props.precio}</p>
                    <button type="button" className="btn btn-secondary">Agregar al carrito</button>
                </div>
            </div>  
        </Fragment>
    );
}

export default Item;