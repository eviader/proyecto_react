import '../cart/Cart.css'
import {  useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext"
import CartView from './CartView'


function Cart(){

    const { cart } = useContext(CartContext);
    const [resQuantity, setQuantity] = useState([0]);

    useEffect(()=>{
        setQuantity(cart.map( quant => {
            quant.quantity += quant.quantity
        }));
      }, []);

    return(
        <div className='main-container'>
            <div className='container-cart'>
                    {   
                        cart.map( cartView => (
                            <div key={cartView.item.id}>
                                <CartView id={cartView.item.id} nombre={cartView.item.nombre} quantity={cartView.quantity}/>
                            </div>
                        ))}
            </div>
            <div className='container-res'>
                <h2>Total: {resQuantity}</h2>
            </div> 
            
        </div>
        );
}

export default Cart;