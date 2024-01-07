import { useSelector } from "react-redux";
import useWindowSize from "../Hooks/useWindowsSize";
import "./Cart.css";
function Cart() {
  // const { cart } = useContext(CartContext);

  const cart = useSelector((state) => {
    return state.items;
  });

  const cartList = Object.values(cart);
  const windowSize = useWindowSize();

  let totalPrice = 0;
  function getTotalPrice() {
    cartList.forEach((item) => {
      totalPrice += item.price.value * item.quantity;
    });
    return totalPrice;
  }

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
      <div className="Cart">
        <ol>
          {cartList.map((item) => {
            return (
              <li key={item.id}>
                <div>{item.title}</div>
                <div>quantity - {item.quantity}</div>
                <div>price - {item.price.value * item.quantity}</div>
              </li>
            );
          })}
        </ol>
        <div>
          <h1>Total Price - {getTotalPrice()}</h1>
        </div>
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
