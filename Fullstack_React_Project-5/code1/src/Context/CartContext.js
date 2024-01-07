// Context - Global state
// Provider - pseudo Parent
// Selector - Extract global state in components
//createContext - would be used in order to create your global state
//useContext- function which take a parameter and returns something
// useContext(context);
// return all the global state

import { createContext } from "react";

const CartContext = createContext({
    cart: {},
    increaseQuantity: () => { },
    decreaseQuantity: () => { }
});

export default CartContext;