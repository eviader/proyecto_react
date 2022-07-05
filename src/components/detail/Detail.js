import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Detail(){

    const params = useParams()
    const [id, setId] = useState([])

    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters/${params.id}`)
        .then((resp) => resp.json())
        .then((data) => setId(data))
    }, []);

        return(
        <>
          { id.length !==0 && <h2>Nombre: {id[0].name}</h2>}
        </>
    );
}

export default Detail;