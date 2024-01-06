import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import "./ProductsList.css";

function ProductsList() {
  let [isLoading, setIsLoading] = useState(true);
  let [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setAllProducts(data);
      });
  }, []);

  if (isLoading) {
    return (
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="loading"
        style={{
          width: "250px",
          height: "250px",
          margin: "auto",
          display: "block",
          marginTop: "200px",
          marginBottom: "200px",
        }}
      />
    );
  } else {
    return (
      <>
      <Link to="/cart" className="button-32">Cart</Link>
      <div className="productsList">
        {allProducts.map(function (product) {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
      </>
    );
  }
}

export default ProductsList;
