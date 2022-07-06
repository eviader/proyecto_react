import Item from "./Item"

function ItemList(props){

    return(
        <div className='container'>
            <div className='row'>
                {
                    props.items.map( item => (
                        <div className='col-md-3' key={item.char_id}>
                            <Item card={item.name} modelo={item.birthday} precio={item.char_id} img={item.img} />
                        </div> 
                    ))}
            </div>
        </div>
        );
}

export default ItemList;