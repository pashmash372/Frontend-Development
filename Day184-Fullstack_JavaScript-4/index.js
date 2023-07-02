// every function will have prototype property
// every object will have __proto__ property

// function Foo(y){
//     this.y = y;
//     this.fn=function(){ // this is local to this function , not available to other objects of Foo class     
//         console.log("fn");
//     }
    // console.log(this.y);
// }

// Foo.prototype.x = 20;
// Foo.prototype.calculate = function(z){ // this is global to this function , available to other objects of Foo class
//     return this.x + this.y + z;
// }   
// Foo.prototype.l=20;

// var b = new Foo(10); // b.__proto__ = Foo.prototype
// b.calculate(30); // b.__proto__.calculate(30) => 60
// console.log("b.y : "+b.y); // 10
// console.log("b.x : "+b.x); // ?20
// console.log("b.l : "+b.l); // ?20
// console.log("b.fn : "+b.fn); // ?[Function]
// console.log("b.calculate : "+b.calculate); // ?[Function]
// b.fn();
// proto will be used for this b to access Foo.prototype


// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// Closures in javascript
// retaining the scope of a variable even after a function 
// has returned is known as closure

// closure happens due to functional programming nature of js 
// what is functional programming?
// 1. passing function as an argument to another function
// 2. returning a function from another function
// function makeWorker(){
//     var name = "Pete";
//     return function(){
//         console.log(name); // name is closure scope here
//     };
// }

// var name = "John";
// var work = makeWorker();
// work(); // what will it show? "Pete" (name where the function was created, not where it was called)

// scopes in javascript
// global scope
// function scope
// block scope
// lexical scope
// closure scope


// function makeCounter(){
//     var count = 0;
//     return function(){
//         return count++; // has access to outer variable "count" // count is closure scope here // this varible is not destroyed after the function is returned // this variable is trapped in the closure scope
//     };
// }

// var counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// closure vs local scope
// closure scope is created when a function is created
// local scope is created when a function is called

// closure vs global scope
// closure scope is created when a function is created
// global scope is created when a js file is loaded

// var counter2 = makeCounter();
// console.log(counter2()); // 0
// console.log(counter2()); // 1
// console.log(counter2()); // 2

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################


// self invoking function
// IIFE - Immediately Invoked Function Expression

// var d= function(){
//     console.log("Hello");
// }

// d();
// --------------------------------------------
// (function(){
//     console.log("Hello Self Invoking Function");
// })();


// where is it going to be used?
// why do we need it?

// 1. to create a private scope
// 2. to avoid global variables
// 3. to avoid naming conflicts
// 4. to create a closure


// anything we create goes to window object
// window object is the global object in browser

//JQuery
//$() // this is a function

// (function ($){
//     var d='d';
//     console.log($)
// })("Angular")

// where is EFFi used?
// used for namespacing

// more practical example

//India
// function convertToDollar(cr,value){
//     return cr*value;        
// }
// var dollarconversionrate=20;
// convertToDollar(dollarconversionrate,200);
// console.log(dollarconversionrate);
// var a=10;

// (function (dollarconversionrate){
//     //Indonesia
//     var d='d';
//     convertToDollar(dollarconversionrate,200);
//     console.log(dollarconversionrate);
// })(500);

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// var a =(function(){
//     var privatefunction = function(){console.log('hello');}    
//     return{
//         publicfunction:function(){
//             privatefunction();
//         }
//     }
// })();

// a.publicfunction(); //? hello

// sum(1,2)
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2)) // 3

// sum(1)(2)
// currying - converting a function with multiple arguments into a function with single argument
// function sum(a){
//     if(arguments.length>1){
//         return arguments[0]+arguments[1];
//     }    
//     return function(b){
//         return a+b;
//     }
// }

// console.log(sum(1)(2)) // 3

// sum(1)(2)(3)(4)(5)(6) homework - write a function to add any number of arguments



// var obj = {
//     first:function(){console.log("first"); return obj},
//     second:function(){console.log("second"); return obj},
//     third:function(){console.log("third"); return obj}
// }
// obj.first().second().third(); // ? first second third 

// what is this called?
// chaining - calling multiple functions on the same object
// obj.first().second().third().first().second().third(); // ? first second third first second third

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// Frontend

// SDE1 - 0-2 years
// SDE2 - 2-5 years
// SSE(lEAD) - 5-8 years
// Staff frontend engineer (lead) - 8-12 years
// frontend em - 12+ years
// senior em - 15+ years
// principal architect - 20+ years
// senior staff em - 20+ years

// Comment of comment in fb
// calendar component
// datatable component
// search

// MNC
// DSA simple /frontend / backend basics round
// implementation round
// javascript round
// framework round
// frontend basics round html css / efficiency of websites frontend interface


// Startup
// 100  % focus on your frontend skills

// fang
// one or two frontend rounds
// one or two DSA rounds
// google 
// all dsa
// maximum one js round 

// llD
// lld for chess
// lld for ludo
// lld for a ridesharing app
// lld for ecommerce app

// lld for frontend is bascially breaking down the frontend into components
// lld for backend is bascially breaking down the backend into classes



// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// ES6 - EcmaScript 6
// var is a function scoped variable
// let and const are block scoped variables
// hoisting in let also happens just like var
// only variable is not assigned undefined

// let d = 10;
// function abc(){
//     const d = 10;
//     if(true){
//         let d = 20;
//         console.log(d);
//     }
//     console.log(d);    
// }
// abc();

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// Arrow functions
// var a =()=>5;
// ? above function is same as below function
// var a = function(){
//     return 5;
// }
// console.log(a());   // 5

// let a =()=>5;

// let b= function(){
//     return 5;
// }
// console.log(a());   // 5

// let d = function(a){
//     return 5*a;
// }

// let e = (a)=>5*a;

// let e =(a)=>{
//     let d ;
//     d=20;
//     console.log(d);
//     return a*d;
// };   // ? this is a multiline arrow function


// arrow functions cannot be used as constructorfunctions
// arrow functions cannot be used as methods
// arrow functions cannot be used as prototype functions
// arrow functions cannot be used as event handlers
// arrow functions cannot be used as getters and setters
// arrow functions cannot be used as async await functions
// arrow functions cannot be used as generators


// in arrow functions 
// this is not of calling object
// it is in parent scope


// go back and experiment and see what is this in arrow functions

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1=arr; // ? shallow copy
// let arr2=arr.slice(); // ? shallow copy
// let arr3=arr.concat(); // ? shallow copy
// let arr4=[...arr]; // ? shallow copy

// shallow copy - only first level of copying is done
// deep copy - all levels of copying is done

// shallow copy
// let arr = [1,2,3,4,5,6,7,8,9,10]; // ? [1,2,3,4,5,6,7,8,9,10]
// let arr1=arr; // ? shallow copy // assignment operator
// let arr2=arr.slice(); // ? shallow copy // slice operator
// let arr3=arr.concat(); // ? shallow copy // concat operator
// let arr4=[...arr]; // ? shallow copy // spread operator

// arr1[0]=100;

// console.log(arr); // ? [100,2,3,4,5,6,7,8,9,10]
// console.log(arr1); // ? [100,2,3,4,5,6,7,8,9,10]
// console.log(arr2); // ? [1,2,3,4,5,6,7,8,9,10]
// console.log(arr3); // ? [1,2,3,4,5,6,7,8,9,10]
// console.log(arr4); // ? [1,2,3,4,5,6,7,8,9,10]

// deep copy
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1=JSON.parse(JSON.stringify(arr)); // ? deep copy
// arr1[0]=100;
// console.log(arr); // ? [1,2,3,4,5,6,7,8,9,10]
// console.log(arr1); // ? [100,2,3,4,5,6,7,8,9,10]



// !################################################# ABOVE TOPIC ENDS HERE ####################################################################


// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr2 = [11,12,13,14,15,16,17,18,19,20];

// let arrn = [...arr1,...arr2]; // ? [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(arrn); 

function abc(a,...rest){ //  ? rest operator // rest operator should be the last parameter in the function definition // rest operator is used to get all the remaining arguments in the function definition    
    console.log(a);
    console.log(rest);
}

abc (1,2,3,4,5,6,7,8,9,10); // ? 1 [2,3,4,5,6,7,8,9,10]
abc(1)  // ? 1 []

