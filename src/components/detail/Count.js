import "../detail/Count.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Count(props){

    /* const ArrayCart = []; */
    const [button, setButton] = useState(true);
    const [cartContador, setContador] = useState(0);

    
    const buttonHandler = () => {
        setButton(false)
        props.itemFunction();
    }

    const sumaContador = () => {
        setContador(cartContador + 1)
    }

    const restaContador = () =>{
        if (cartContador > 0) {
            setContador(cartContador - 1)
        }
    }
    
    return(
        <div className="contador-carrito">
            <div className="btn-contador">
                {button && <button onClick={restaContador} type="button" className="btn btn-secondary">-</button>}
                {button && <h5 className="num-contador">{cartContador}</h5>}
                {button && <button onClick={sumaContador} type="button" className="btn btn-secondary">+</button>}
            </div>
            {button && <button onClick={buttonHandler} type="button" className="btn btn-secondary">Agregar a Carrito</button>}
            {!button && <Link to='/cart'> <button onClick={buttonHandler} type="button" className="btn btn-secondary">Ir al carrito</button></Link >} 
            {/* {!button && <button type="button" className="btn btn-secondary"></button>} */}

        </div>
    );
}

export default Count;