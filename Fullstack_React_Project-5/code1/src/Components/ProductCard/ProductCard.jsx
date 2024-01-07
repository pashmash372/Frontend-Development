import Rating from "../Rating";
import ReduxAddToCart from "../ReduxAddToCart";
import "./ProductCard.css";

function ProductCard({ product }) {
  // console.log("product card" + product.id);
  return (
    <div className="ProductCard">
      <h3>{product.title}</h3>
      <p>{product.price.value}</p>
      <Rating rating={product.rating.value} maxRating={5} size={1} />
      <ReduxAddToCart product={product} />
    </div>
  );
}

export default ProductCard;
