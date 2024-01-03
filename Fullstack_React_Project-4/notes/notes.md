# React Project 4

```js
  let totalPrice = 0;
  function getTotalPrice() {
    cartList.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
```
![Alt text](image.png)