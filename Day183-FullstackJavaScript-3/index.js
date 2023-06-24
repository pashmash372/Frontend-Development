// ! call apply and bind

// what is this ?
// this is a keyword which is a reference to the object that owns the executing code
// this is not a variable, it is a keyword

// ? is there is way change the calling instance of this keyword?
// yes, we can change the calling instance of this keyword using call, apply and bind

// what is the difference between call, apply and bind?


// var pokemon = {
//     firstName: 'Pika',
//     lastName: 'Chu',
//     getPokeName: function () {
//         var fullName = this.firstName + ' ' + this.lastName; // ? what is this keyword here? pokemon object  
//         return fullName;
//     }   
// };
// var pokemonName = function (snack,hobby) {
//     console.log(this.getPokeName() + ' I choose you!'); //? this keyword will always look for the calling instance
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby); //? what is this keyword here?   window object
// };

// pokemonName() // undefined I choose you!
// pokemonName("sushi","algorithms") // undefined I choose you!

// console.log(window); //? window object is the global object in the browser environment   
// window.pokemonName("sushi","algorithms") // ? Pika Chu I choose you! Pika Chu loves sushi and algorithms

//? call(instance,parram1,param2,param3,....)
// pokemonName.call(pokemon,"sushi","algorithms") //? Pika Chu I choose you! Pika Chu loves sushi and algorithms
//?  window would work in the browser environment, but not in the node environment
//?  window contains all the global variables, functions, objects, etc


//! call(instance,parram1,param2,param3,....)
// ! apply is similar to call, but it takes an array of parameters instead of comma separated values


// var pokemon = {
//     firstName: 'Pika',
//     lastName: 'Chu',
//     getPokeName: function () {
//         var fullName = this.firstName + ' ' + this.lastName; // ? what is this keyword here? pokemon object  
//         return fullName;
//     }   
// };
// var pokemonName = function (snack,hobby) {
//     console.log(this.getPokeName() + ' I choose you!'); //? this keyword will always look for the calling instance
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby); //? what is this keyword here?   window object
// };



// apply(instance,[parram1,param2,param3,....])
// pokemonName.apply(pokemon,["sushi","algorithms"]) //? Pika Chu I choose you! Pika Chu loves sushi and algorithms


// ! bind(instance,parram1,param2,param3,....)



// var pokemon = {
//     firstName: 'Pika',
//     lastName: 'Chu',
//     getPokeName: function () {
//         var fullName = this.firstName + ' ' + this.lastName; // ? what is this keyword here? pokemon object  
//         return fullName;
//     }   
// };
// var pokemonName = function (snack,hobby) {
//     console.log(this.getPokeName() + ' I choose you!'); //? this keyword will always look for the calling instance
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby); //? what is this keyword here?   window object
// };

// var logPokemon = pokemonName.bind(pokemon); //? bind will return a new function with the calling instance of this keyword set to the object passed in as the first parameter
// logPokemon("sushi","algorithms") //? Pika Chu I choose you! Pika Chu loves sushi and algorithms

// //? bind is used to create a new function with the calling instance of this keyword set to the object passed in as the first parameter

// var logPokemon = pokemonName.bind(pokemon,"sushi","algorithms"); //? bind will return a new function with the calling instance of this keyword set to the object passed in as the first parameter
// logPokemon() //? Pika Chu I choose you! Pika Chu loves sushi and algorithms

// //? bind is used to create a new function with the calling instance of this keyword set to the object passed in as the first parameter

// var logPokemon = pokemonName.bind(pokemon,"sushi"); //? bind will return a new function with the calling
// ? instance of this keyword set to the object passed in as the first parameter
// logPokemon("algorithms") //? Pika Chu I choose you! Pika Chu loves sushi and algorithms
// logPokemon("algorithms","pizza") //? Pika Chu I choose you! Pika Chu loves sushi and algorithms


// var monica ={
//     name: 'Monica Geller',
//     total: 400,
//     deductMonthlyFee: function(fee){
//         this.total = this.total - fee; //? this keyword will always look for the calling instance , here it is monica object
//         return this.name + ' remaining balance is '+ this.total;
//     }
// }

// var rachel ={   
//     name: 'Rachel Green',
//     total: 1500,
// }

// var rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel,200); //? bind will return a new function with the calling instance of this keyword set to the object passed in as the first parameter
// explaination
// var rachelFeeDeductor = function(fee){
//     this.total = this.total - fee; //? this keyword will always look for the calling instance , here it is rachel object
//     return this.name + ' remaining balance is '+ this.total;
// }

// console.log(rachelFeeDeductor()); // Rachel Green remaining balance is 1300
// console.log(rachelFeeDeductor()); // Rachel Green remaining balance is 1100
// console.log(rachelFeeDeductor()); // Rachel Green remaining balance is 900

// monica.deductMonthlyFee.call(rachel,200); //? call will return a new function with the calling instance of this keyword set to the object passed in as the first parameter
// explaination
// var rachelFeeDeductor = function(fee){
//     this.total = this.total - fee; //? this keyword will always look for the calling instance , here it is rachel object
//     return this.name + ' remaining balance is '+ this.total;
// }

// console.log(rachelFeeDeductor()); // Rachel Green remaining balance is 700

// monica.deductMonthlyFee.apply(rachel,[200]); //? apply will return a new function with the calling instance of this keyword set to the object passed in as the first parameter

// explaination
// var rachelFeeDeductor = function(fee){
//     this.total = this.total - fee; //? this keyword will always look for the calling instance , here it is rachel object
//     return this.name + ' remaining balance is '+ this.total;
// }

// console.log(rachelFeeDeductor()); // Rachel Green remaining balance is 500

//? call and apply are used to invoke the function immediately, whereas bind is used to just return a function with the calling instance of this keyword set to the object passed in as the first parameter, so that we can invoke it later


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


// console.log(Math.max(1,2,3,4,5,6,7,8,9,10)) //? 10
// console.log(Math.max([1,2,3,4,5,6,7,8,9,10])) //? NaN

//? Math.max() expects comma separated values, but we are passing an array, so it will return NaN

//? we can use apply to pass an array of values to Math.max()

// console.log(Math.max.apply(null,[1,2,3,4,5,6,7,8,9,10])) //? 10

//? null is passed as the first parameter because Math.max() doesn't require any calling instance of this keyword

// console.log(Math.max.apply(this,[1,2,3,4,5,6,7,8,9,10])) //? 10


//? call and apply are used to invoke the function immediately, whereas bind is used to just return a function with the calling instance of this keyword set to the object passed in as the first parameter, so that we can invoke it later

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################


// var a=[1,2,3,4,5,6,7,8,9,10];

// a.slice(0,5); //? [1,2,3,4,5] //? slice(start,end) //? end is not inclusive  //? slice will not modify the original array //? slice will return a new array

// console.log(a); //? [1,2,3,4,5,6,7,8,9,10]      //? original array is not modified by slice method

// console.log(a.slice()) //? [1,2,3,4,5,6,7,8,9,10] //? slice() will return a new array with all the elements of the original array

// console.log(a.slice(1)) //? [2,3,4,5,6,7,8,9,10] //? slice(1) will return a new array with all the elements of the original array starting from index 1
// //? if start is not specified, slice will start from index 0

// console.log(a.slice(1,5)) //? [2,3,4,5] //? slice(1,5) will return a new array with all the elements of the original array starting from index 1 to index 5

// ! subtopic ends here

// function a(){
//     arguments.push(10); //? arguments is an array like object, it is not an array, so it doesn't have push method
// }

// a(1,2,3,4,5,6,7,8,9,10); //? Uncaught TypeError: arguments.push is not a function

//? we can use call or apply to convert arguments to an array

// function a(){
//     var b=Array.prototype.slice.call(arguments); //? converting arguments to an array using call method  
//     //? slice will return a new array with all the elements of the original array
//     console.log(b); 
// }

// a(1,2,3,4,5,6,7,8,9,10); //? [1,2,3,4,5,6,7,8,9,10,11]


// a(1,2,3,4,5,6,7,8,9,10); 


//? we can use call or apply to convert arguments to an array

// function a(){
//     var b=Array.prototype.slice.apply(arguments); //? converting arguments to an array using apply method  
//     //? slice will return a new array with all the elements of the original array
//     console.log(b); 
// }

// a(1,2,3,4,5,6,7,8,9,10); //? [1,2,3,4,5,6,7,8,9,10,11]

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

//!  proto vs prototype

// prototype is a property of a function and proto is a property of an object 
// prototype is used by constructor functions and proto is used by all the objects in javascript
// prototype example

// function a(){
//     x:10
//     y:20
// }

// console.log(a.prototype); //? a {}
// console.log(a.prototype.x); //? undefined 
// console.log(a.prototype.y); //? undefined why? because a is not a constructor function , it is a normal function , so it doesn't have a prototype property 



// function a(){
//     this.x=10;
//     this.y=20;
// }

// console.log(a.prototype); //? a {}
// console.log(a.prototype.x); //? undefined

// constructor function example

// function Dog(name,breed){
//     this.name=name;
//     this.breed=breed;
//     tail=round;
// }

// var pug = new Dog("Pug","Pug");
// var bulldog = new Dog("Bulldog","Bulldog");

// console.log(pug.name); //? Pug
// console.log(pug.breed); //? Pug
// console.log(pug.tail); //? undefined




// ? __proto__ is a reference to the prototype object of the function


var a = {
    x:10,
    calculate: function(z){
        return this.x + this.y + z; //? this keyword will always look for the calling instance
    }    
};

var b = {
    y:20,
    __proto__:a //? __proto__ is a reference to the prototype object of the function  , here it is a object, so b object will inherit all the properties and methods of a object
};

var c = {
    y:30,
    __proto__:a
};

//? __proto__ is a reference to the prototype object of the function

console.log(b.calculate(30)); //? 60
