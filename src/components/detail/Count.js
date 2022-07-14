import "../detail/Count.css"
import { useState } from 'react'


function Count(props){

    const [button, setButton] = useState(true);
    
    const buttonHandler = () => {
        setButton(false)
        props.itemFunction();
    }
    
    return(
        <>
            {button && <button onClick={buttonHandler} type="button" className="btn btn-secondary">Agregar a Carrito</button>}
            {!button && <h2>Se agrego correctamente al carrito</h2>}
            {!button && <button  type="button" className="btn btn-secondary">Ver carrito</button>}
        </>
    );
}

export default Count;