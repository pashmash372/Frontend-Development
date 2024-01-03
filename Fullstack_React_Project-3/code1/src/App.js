import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import ProductsList from "./Components/ProductList/ProductsList";
import CartContext from "./Context/CartContext";
import "./styles.css";

function App() {
  // cart
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id]; // delete deltes a key from an object
    }
    setCart(newCart);
  }

  const cartLength = Object.keys(cart).length;
  return (
    <CartContext.Provider
      value={{ cart, increaseQuantity, decreaseQuantity }}
    >
      <div >
        {cartLength >0 ? <Cart/> : null}        
        <ProductsList />

      </div>
    </CartContext.Provider>
  );
}

export default App;

// ProductList.js
// ProductList.jsx
// ProductList/index.js
// ProductList/index.jsx