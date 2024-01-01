import AddToCart from "../AddToCart";
import Rating from "../Rating";
import "./ProductCard.css";

function ProductCard({ product, cart, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="ProductCard">
      <h3>{product.title}</h3>
      <p>{product.price.value}</p>
      <Rating rating={product.rating.value} maxRating={5} size={1} />
      <div>
        <AddToCart
          product={product}
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
}

export default ProductCard;
