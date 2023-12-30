// import { ProductCard } from "./ProductCard/ProductCard.js";
import ProductCard from "../ProductCard";
import "./ProductsList.css";

const products = [
  {
    id: 1,
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000"
  },
  {
    id: 2,
    title: "Apple iPhone 13",
    price: "Rs. 70,000"
  },
  {
    id: 3,
    title: "Google Pixel 7",
    price: "Rs. 50,000"
  },
  {
    id: 4,
    title: "Nokia 1100",
    price: "Rs. 2,000"
  },
  {
    id: 5,
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000"
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  },
  {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
  }
];


// map function in js
// let a =[1,2,3];
// return [2,,4,6]
// products.map((item,index) => {
//  return item*2;
// })

function ProductsList() {
  return (
    <div className="productsList">
      {
        products.map((Product) => {
          return <ProductCard title={Product.title} price={Product.price} />
        })
      }
    </div>
  )
}

export default ProductsList;