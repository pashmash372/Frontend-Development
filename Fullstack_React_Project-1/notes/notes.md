# React Project 1

AJAX: Asynchronous JavaScript and XML

## What is AJAX

AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Dynamically getting the data from the server and using it on the client side is what AJAX is all about.

```javascript
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

- ajax is publisher subscriber pattern
- ajax is asynchronous once the ready state is changed it will call the function

## What is Event Loop

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

*What is the difference between a synchronous and an asynchronous program?*

Synchronous: A synchronous program is executed in sequence. Each statement waits for the previous statement to finish before executing.

Note : go through event loop and call stack in javascript

SetTimeout: The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

- is browser api not javascript api
- setTimeout is asynchronous

### What is  Event queue in js

The event queue is a repository where events from an application are held prior to being processed by a receiving program or system.

## Sid sir dummy url for api created

 [dummy url sir created for product api](https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products)

In order to do an AJAX call
javascript gives you with a constructor function called XMLHttpRequest

```javascript
const xhttp = new XMLHttpRequest();
```

this is going to give you instance of this constructor
get post put delete => http verbs , cruds calls

```javascript

x.http.open(
    'GET',
'https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products', true
    ); 
    // url gets deduced to the server and the server sends back the response
xhttp.send(); // send the request to the server
// readyState (0,1,2,3,4)
// Browser api is going to receive this ready state
// x object it say that I will give you mulitple callbacks
// Browser api continously polls with the server
// passes the data using separted callbacks
// these callbacks would be a way for my browser api to comminicate 
// with the thread of main js 
// onreadystatechange
// everytime the change is happening in the readystate value
// when ready state is 4 means server has sent the data
// x.onreadystatechange = function() {
// this.response

xhttp.onload = function() {
    console.log(this.responseText);
}
```
