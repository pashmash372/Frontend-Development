
// Events
// Events loop
// event delegation
// how to add events
// how js works internally
// solve some Js questions
// HTML if time allows

// function abc(){
//     console.log(1); // call stack
//     setTimeout(function(){
//         console.log(2);
//     },1000); //call stack , then browser api, then timer , go to queue , then call stack
//     setTimeout(function(){
//         console.log(3);
//     },0); //call stack , then browser api, then timer  , go to queue , then call stack
//     console.log(4); // call stack
    // invoke 
// }

// abc(); // 1 4 3 2


// * what is settimeout
// *setTimeout(callback, time) - it will execute the callback after the time 
//* setTimeout(abc,300) - it will execute the abc function after 300ms
// *js is single threaded language,so it will execute one line at a time

// *this concept build on event loop , 
// *event loop is a process which will check the call stack and callback queue
// *if call stack is empty then it will check the callback queue and push the callback to call stack
// *browser APIs is multi threaded , so it will execute the callback in the callback queue

//* Call stack gets all functions to be executed
// *Browser api gets all async functions
// *Event queue gets all functions from browser apis
// *call stack once empty 
// * will take functions from event queue


// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// DOM - Document Object Model
// DOM Manipulation 
// DOM fancy name for HTML
// DOM is a tree structure

// js can manipulate the DOM elements
// js can add , remove , update the DOM elements
// you should not do DOM manipulation in js , it will make your code messy
// you should use js only for logic
// you should use css for styling
// you should use html for structure

// why is DOM manipulation is bad? 
// it will render the page again and again , it will make your page slow , it will make your code messy


// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// event listener

// target.addEventListener(type,function,userCapture)
// getElementById()
// window 
// document

// console.log(document); // it will give you the whole html document

// console.log(document.getElementById('btn')); // it will give you the button element

// button.addEventListener('click',function(){
//     console.log('Why did you click me?');
// })

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// ?bubbling and capturing in js 


// ?bubbling - it will start from the target element and go to the parent element
// ?capturing - it will start from the parent element and go to the target element

// * NOTE  you can add your js file in the head or body tag , but it is recommended to add it in the body tag   
// * NOTE you can add your javascript in js file or in script tag in html file
// * why ? because it will make your code clean and readable
// * and javascript can be cached but html cannot be cached

