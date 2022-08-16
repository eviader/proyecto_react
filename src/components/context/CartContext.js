import { createContext, useState } from "react";

export const CartContext = createContext({})
const { Provider } = CartContext

export const  CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const cleanCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ]
        )
    }

    const context = {
        cart,
        cleanCart,
        addToCart
    }
 
    return(
        <Provider value={context}>
            {children}
        </Provider>
    );
}