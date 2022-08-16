import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "../detail/Detail.css"
import Count from "./Count"


function Detail(){

    
    const params = useParams();
    const [id, setId] = useState([]);

    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => setId(data))
    }, []);

    
    const NewItemCar = { 
                        id: id.length !==0 && id[0].char_id,
                        nombre: id.length !==0 && id[0].name,
                        apodo: id.length !==0 && id[0].portrayer,
                        nacimiento: id.length !==0 && id[0].birthday
                    }

    return(
        <div className="containers">
            <div className="container-img">
                {id.length !==0 && <img className='img-detail' src= {`${id[0].img}`} ></img>}
            </div>
            <div className="container-info">
                {id.length !==0 && <h2 className="title">Nombre: {id[0].name}</h2>}
                {id.length !==0 && <h5> Nacimiento: {id[0].birthday}</h5>}
                {id.length !==0 && <h5> Ocupación: {id[0].occupation}</h5>}
                {id.length !==0 && <h5> Apodo: {id[0].nickname}</h5>}
                {id.length !==0 && <h5> Actor: {id[0].portrayed}</h5>}
            <div>
                <Count newItem={NewItemCar} />
            </div>

            </div>
        </div>  
    );
}

export default Detail;