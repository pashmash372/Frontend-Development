import { useDispatch, useSelector } from "react-redux";
import "./ReduxAddToCart.css";

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    return state.cart.items[product.id]?.quantity || 0;
  });

  // console.log("Add to cart " + product.id);

  function addQuantity() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }
  function reduceQuantity() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }
  if (quantity > 0) {
    return (
      <div className="addsubquantity">
        <button className="plus" onClick={addQuantity}>
          +
        </button>
        <span className="quantity"> {quantity} </span>
        <button className="minus" onClick={reduceQuantity}>
          -
        </button>
      </div>
    );
  } else {
    return (
      <button className="addToCart" onClick={addQuantity}>
        AddToCart
      </button>
    );
  }
}

export default AddToCart;
