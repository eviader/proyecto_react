import { createContext, useState } from "react";

export const CartContext = createContext({})

const { Provider } = CartContext



export const  CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState({defaultValue});

    const cleanCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        setCart(
            [
                ...cart,
                {
                    item:item,
                    quantity: quantity
                }
            ]
        )
    }



    const context = {
        cleanCart,
        addToCart
    }
 
    return(
        <Provider value={context}>
            {children}
        </Provider>
    );
}