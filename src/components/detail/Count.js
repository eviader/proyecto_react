import "../detail/Count.css"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";


function Count(props){

    const { addToCart } = useContext(CartContext);
    const [button, setButton] = useState(true);
    const [cartCount, setCount] = useState(0);
    
    const sumaContador = () => {
        setCount(cartCount + 1)
    }

    const restaContador = () =>{
        if (cartCount > 0) {
            setCount(cartCount - 1);
        }
    }

    const onAdd = () => {
        addToCart(props.newItem, cartCount)  
        setButton(false)
    }

    return(
        <div className="contador-carrito">
            <div className="btn-contador">
                {button && <button onClick={restaContador} type="button" className="btn btn-secondary">-</button>}
                {button && <h5 className="num-contador">{cartCount}</h5>}
                {button && <button onClick={sumaContador} type="button" className="btn btn-secondary">+</button>}
            </div>
            {button && <button onClick={onAdd} type="button" className="btn btn-secondary">Agregar a Carrito</button>}
            {!button && <Link to='/cart'> <button type="button" className="btn btn-secondary">Ir al carrito</button></Link>} 
        </div>
    );
}

export default Count;