import '../cart/CartView.css'


function CartView(props){

    return(
        <>
            <div className="cart" >
                <div className='cart-id' key={props.id}>
                    <h3>{props.nombre}</h3>
                </div>
                <div className='cart-num'>
                    <h5>{props.quantity}</h5>
                </div>
            </div>
        </>
    );
}
    
export default CartView;