import "./AddToCart.css";

function AddToCart({ product, cart, increaseQuantity, decreaseQuantity }) {
  console.log(cart);
  console.log(Object.keys(cart));
  let quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div className="addsubquantity">
        <button onClick={addQuantity} className="plus">
          +
        </button>
        <span className="quantity">{quantity}</span>
        <button onClick={subQuantity} className="minus">
          -
        </button>
      </div>
    );
  }

  function addQuantity() {
    increaseQuantity(product);
  }

  function subQuantity() {
    decreaseQuantity(product);
  }

  return (
    <button className="addToCart" onClick={addQuantity}>
      Add to Cart
    </button>
  );
}

export default AddToCart;
