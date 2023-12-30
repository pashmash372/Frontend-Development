![Alt text](image-1.png)

![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)

component here made dynamic in nature, using props

![Alt text](image-5.png)

![Alt text](image-6.png)

using props to make component dynamic and curly braces to use javascript inside jsx
props is an object that contains all the properties that we pass to the component

![Alt text](image-7.png)

![Alt text](image-8.png)

can we say its like argument we pass to a function


using map 
![Alt text](image-9.png)

![Alt text](image-10.png)

why curly braces in map
anything inside curly braces is javascript expression 

```javascript
      {products.map(
        function (Product) {
          return <ProductCard title={Product.title} price={Product.price} />
        }
      )}
// above can be writtern as below
      {
        products.map((Product) => {
          return <ProductCard title={Product.title} price={Product.price} />
        })
      }

```

why this is not scalable , what if we have 1000 products then we have to write 1000 lines of code



![Alt text](image-11.png)

![Alt text](image-12.png)

![Alt text](image-13.png)

why className instead of class ?
because class is a reserved keyword in javascript

also  we need to import css file in index.js file to use css in our project


![Alt text](image-14.png)

we have to create folder named components and inside that folder we have to create ProductCard.js file

![Alt text](image-15.png)

![Alt text](image-16.png)

jsx or js both can be used in react , jsx preferred as it adds readability to the code

![Alt text](image-17.png)

here we index js file for product card component and product list component
acts as a entry point for the component
and also aggreator for all the files in the folder


named export and default export ?
named export is used when we have multiple components in a file
default export is used when we have only one component in a file


![Alt text](image-18.png)
![Alt text](image-19.png)

import { ProductsList } from "./ProductList/ProductsList.js";
import ProductsList from "./ProductList";

the above follow and checks any of the below file exists or not then throw error

// ProductList.js
// ProductList.jsx
// ProductList/index.js
// ProductList/index.jsx

![Alt text](image-20.png)