import Item from "./Item"

function ItemList(props){

    return(
        <div className='container'>
            <div className='row'>
                {   
                    props.items.map(producto => (
                        <div className='col-md-3' key={producto.char_id}>
                            <Item card={producto.name} modelo={producto.birthday} precio={producto.char_id} />
                        </div> 
                    ))}
            </div>
        </div>
        );
}

export default ItemList;