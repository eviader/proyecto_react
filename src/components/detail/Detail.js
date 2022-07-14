import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "../detail/Detail.css"
import Count from "./Count"


function Detail(){

    const params = useParams()
    const [id, setId] = useState([])
    const [itemSave, setItemSave] = useState([])

    console.log(itemSave)

    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => setId(data))
    }, []);

    
    const newDateFunction = () => {
        const newDate = {
            nombre: id !== 0  && id[0].name,
            id : id !== 0  && id[0].char_id
        }
        setItemSave(newDate);
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
                <Count item={itemSave} itemFunction={newDateFunction}/>
            </div>

            </div>
        </div>  

    );
}

export default Detail;