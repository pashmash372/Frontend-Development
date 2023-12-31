import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import "./ProductsList.css";

const products = [
  {
    id: 1,
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000",
  },
  {
    id: 2,
    title: "Apple iPhone 13",
    price: "Rs. 70,000",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    price: "Rs. 50,000",
  },
  {
    id: 4,
    title: "Nokia 1100",
    price: "Rs. 2,000",
  },
  {
    id: 5,
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000",
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000",
  },
];

// the below function is a mock api call
function getProductsApi(callback) {
  setTimeout(function () {
    callback(products);
  }, 3000);
}

function ProductsList() {

  let [isLoading, setIsLoading] = useState(true);
  let [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProductsApi(function (response) {
      console.log("api started1");
      setAllProducts(response);
      setIsLoading(false);
      console.log("api ended");
    });
  },[allProducts,isLoading] );

  if (isLoading) {
    return (
     <img 
      src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
      alt="loading"
      style={{width: "250px", height: "250px", margin: "auto" , display: "block", marginTop: "200px", marginBottom: "200px"}}
    />
    ) 
  } else {
    return (
      <div className="productsList">
        {allProducts.map((Product) => {
          return (
            <ProductCard
              key={Product.id}
              title={Product.title}
              price={Product.price}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsList;
