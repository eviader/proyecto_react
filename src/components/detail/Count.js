import "../detail/Count.css"
import { useState } from 'react'


function Count(props){

    const id =  props.id;
    const [button, setButton] = useState(true);

    const buttonHandler = () => {
        setButton(false)
        const newDate = {
            nombre: id !== 0  && id[0].name,
            id : id !== 0  && id[0].char_id
        }
    }
    
    return(
        <>
            {button && <button onClick={buttonHandler} type="button" className="btn btn-secondary">Agregar a Carrito</button>}
        </>
    );
}

export default Count;