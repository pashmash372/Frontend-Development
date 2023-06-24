// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var b = a;
// b[0] = 42;

// console.log(a,b);   // [ 42, 2, 3, 4, 5, 6, 7, 8, 9 ] [ 42, 2, 3, 4, 5, 6, 7, 8, 9 ]
//?  The array is passed by reference, so both variables point to the same array.

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################





// Objects 
// var obj = {
//     a: "1",
//     b: "2",
// }

// var obj1 = new Object();   // Object constructor function 

// var keyname ="a";
// console.log(obj.a);   // 1
// console.log(obj["a"]);  // 1
// console.log(obj[a]);  // undefined
// console.log(obj[keyname]);  // 1


// var dog = {
//     name: "bully",
//     breed: "bulldog",    
//     bark : function(){
//         console.log("woof woof");
//     },
//     owner: {
//         name: "Monica",
//         profeesion: "Coding instructor",
//     }
// }

// console.log(dog.name);  // bully
// console.log(dog.breed);  // bulldog
// dog.bark();  // woof woof
// console.log(dog.owner.name);  // Monica

// console.log(dog["name"]);  // bully
// console.log(dog["owner"]["name"]);  // Monica

// console.log(dog.owner["name"]);  // Monica
// console.log(dog.owner["profeesion"]);  // Coding instructor

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################
// var a ={},
//     b={key: "b"},
//     c={key: "c"};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);  // 456
// explain why this is the case 
// The key of an object can only be a string or a symbol. symbol is a new data type in ES6. example: Symbol("foo") 
// When setting a non-string property on an object, JavaScript will implicitly stringify the parameter value.
// In this case, since b and c are both objects, they will both be converted to "[object Object]".
// As a result, a[b] and a[c] are both equivalent to a["[object Object]"] and can be used interchangeably.
// Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].
// Thus, a[b] ← 123 and a[c] ← 456.


// console.log(a);  // { '[object Object]': 456 }

// console.log(a[b]);  // 456
// console.log(a[c]);  // 456

// console.log(a["[object Object]"]);  // 456

// console.log(b.toString());  // [object Object]
// console.log(c)  // { key: 'c' }
// console.log(c.toString());  // [object Object]

// console.log(a);  // { '[object Object]': 456 }

// a["key"]= 789;
// console.log(a);  // { '[object Object]': 456, key: 789 }
// a[ada]= 789; // a[{}] = 789
// console.log(a);  // { '[object Object]': 456, key: 789, '[object Object]': 789 }


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

//?   function declaration vs function expression


// ? function declaration
// function abc(){
//     console.log("hello abc");
// }

// abc();  // hello abc
// console.log(abc());  // hello abc undefined


// ? function expression
// var func = function(){
//     console.log("hello func");
// }

// func();  // hello func

//  where do you get undefined from? 
//  The function is not returning anything, so it returns undefined by default ,
//  console.log(func());  // hello func
//  console.log(func());  // undefined


//  function abcd() {
//     return ( function() {console.log("returned func")} );

//  }

//      abcd();  // [Function (anonymous)] 
//      abcd()();  // returned func 
//      console.log(abcd());  // [Function (anonymous)]
//      console.log(abcd()());  // returned func undefined


// var x = abcd();
// console.log(x);  // [Function (anonymous)]
// console.log(x());  // returned func undefined



// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// ? function call back   // passing function as a parameter to another function 

// function def(fn){
//     fn();
// }


// def (function(){console.log("passed function")}); //?  passed function

// note pass parm to the passed function



// def (function(e){console.log("passed function"+e)});    // passed functionundefined


// ?arguments vs parameters

// function abc(a,b,c){
//     console.log(arguments);  // [Arguments] { '0': 1, '1': 2, '2': 3 }
//     console.log(a);  // 1
//     console.log(b);  // 2
//     console.log(c);  // 3
// }

// abc(1,2,3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
// abc(1,2); // [Arguments] { '0': 1, '1': 2 }
// what is parameters?  // a,b,c are parameters and arguments are 1,2,3


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


// var dogs = ["bully", "pug", "lab", "poodle","bulldog" ,"pitbull"];
// dogs.length=1;  // 1
// console.log(dogs);  // [ 'bully' ]  

// dogs.length=0;  // 0
// console.log(dogs);  // []

// dogs.length=4;  // 4
// console.log(dogs);  // [ <4 empty items> ] 


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


// function a(){
//     console.log(arguments.length);
     // console.log(arguments);
//     var arr=[1,2,3];
//     arr.push(4);
//     console.log(arr);
// }


// a(1,2,3,4,5,6,7,8,"xyz",10);

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


// var a = 10;
// function abc(){
//     var a=2;
//     console.log(a);
// }
// abc();  // 2 // local scope has higher priority than global scope
// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


//? hoisting 
// what is hoisting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved 
// to the top of their scope before code execution.

// var a = 10;
// function abc(){
//     console.log(a);     // ?  undefined why ?  // var a=2; is hoisted to the top of the function why a=10 is not hoisted?
//     var a=2;    
// }
// abc();  // undefined why?  // var a=2; is hoisted to the top of the function 


// actually js would do like this below shown 
// while function is executed, it will look for the variable declaration and
//  hoist it to the top of the function

// function a(){
// var d
// var e;
// var f;
//     var d=10;   // d=10
//     console.log(e); // undefined
//     var e=20;  // e=20
//     var f=30;   // f=30
// }






// var x=21;
// var girl = function(){
//     console.log(x);  // undefined
//     var x=20;
// }
// girl();  // undefined


//! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// var a=[];
// var a = new Array(0);

// var dog={

// }


function Dog(name,breed){ // why D is capital?  // ?constructor function it is a convention to use capital letter
    this.name=name;
    this.breed=breed;
}

var d1=new Dog("bully","bulldog");
console.log(d1);  // ? Dog { name: 'bully', breed: 'bulldog' }

var d2=new Dog("pluto","Pomeranian");
console.log(d2);  // ? Dog { name: 'pluto', breed: 'Pomeranian' }

//  what are the three ways to create an object in js?

// 1. object literal 
// ? example :  var dog={name:"bully",breed:"bulldog"};

// 2. object constructor function
// ?example : function Dog(name,breed){this.name=name;this.breed=breed;}

// 3. object.create() method
// ?example : var dog=Object.create(null); dog.name="bully"; dog.breed="bulldog";

// var dog =new Object();
// dog.name="bully";
// dog.breed="bulldog";


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################