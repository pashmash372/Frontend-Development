import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import useWindowSize from "../Hooks/useWindowsSize";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  const windowSize = useWindowSize();
  console.log(windowSize);
  console.log(cartList);
  if (cartList.length === 0) {
    return (
      <div>
        <h1>Cart is Empty</h1>
      </div>
    );
  } else if (windowSize.width <= 643) {
    return;
  } else {
    return (
      <div>
        <ol>
          {cartList.map((item) => {
            return (
              <li key={item.id}>
                <div>{item.title}</div>
                <div>quantity - {item.quantity}</div>
                <div>price - {item.price * item.quantity}</div>
              </li>
            );
          })}
        </ol>
      </div>
    );

    // return (
    //   <div>
    //     <ol>
    //       {cartList.map((item) => {
    //         <li key={item.id}>
    //           {item.title}
    //           {item.quantity}
    //         </li>;
    //       })}
    //     </ol>
    //   </div>
    // );
  }
}

export default Cart;
