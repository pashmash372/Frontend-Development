// import { ProductCard } from "./ProductCard/ProductCard.js";
import { useState } from "react";
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
  {
    id: 7,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000",
  },
  {
    id: 8,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000",
  },
];

// map function in js
// let a =[1,2,3];
// return [2,,4,6]
// products.map((item,index) => {
//  return item*2;
// })

// function getProductsApi() {
//   setTimeout(() => {
//     return products;
//   }, 2000);
// }

// function getProductsApi() {
//   setTimeout(function () {
//     return products;
//   }, 1000);
// }

function getProductsApi(callback) {
  setTimeout(function () {
    callback(products);
  }, 1000);
}

function ProductsList() {

  let [isLoading, setIsLoading] = useState(true);
  let [allProducts, setAllProducts] = useState([]);

  console.log("api started");

  getProductsApi(function (response) {
    setAllProducts(response);
    console.log("api ended");
    setIsLoading(false);
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
