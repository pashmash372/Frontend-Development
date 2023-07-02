//     * Data types

//     * Primitive

//     * String
//     * "abc"  double quotes, 'abc' single quotes , `abc` backtick
//     * Number
//     * 1,2,3
//     * Boolean
//     * true, false
//     * null
//     * undefined

//     * dynamic typed language , loosely typed language
//     * type decieded at runtime

// var a="abc"
// var b=1 
// var c=true
// var d= null;  // * null is a special value which means nothing, empty , not assigned , not initialized 
// var e= undefined; // * undefined is a special value which means not defined , not initialized , not assigned
// var f;
// console.log(a,b,c) // * abc 1 true
// console.log(d,e) // * null undefined , explicitly we are assigning null and undefined
// console.log(f) // * undefined  , because f is not initialized , implicitly it is undefined


// console.log(typeof(a)) // * string
// console.log(typeof(b)) // * number
// console.log(typeof(c)) // * boolean 
// console.log(typeof(d)) // * object , null is a special object why ? because of a bug in javascript , null is not a object , it is a special value   
//  * every thing in javascript is object except null and undefined
//  * null is primitive data type, but typeof(null) is object , it is a bug in javascript,
//  * but it signifies empty value or null value
// console.log(typeof(e)) // * undefined , undefined is a special undefined
// console.log(typeof(f)) // * undefined

// console.log(typeof(typeof(e))) // * string , typeof(e) is undefined , typeof(undefined) is string
// console.log(typeof(typeof(d))) // * string , typeof(d) is object , typeof(object) is string


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// == vs === 
// == checks only value
// === checks value and type

// console.log(1==1) // * true
// console.log(1=="1") // * true , because == checks only value , not type
// console.log(1==="1") // * false , because === checks value and type
// console.log(1===1) // * true

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// * conversion using (+)

// console.log(1+"1") // * 11 , because 1 is number and "1" is string , so 1 is converted to string and concatenated with "1"
// console.log("1"+1) // * 11 , because 1 is number and "1" is string , so 1 is converted to string and concatenated with "1"
// console.log(+"1") // * 1 , because +"1" is converted to number

// var a = +"hello" // * NaN , because +"hello" is converted to number , but "hello" cannot be converted to number , so it is NaN
// var b = +"hello world" // * NaN , because +"hello world" is converted to number , but "hello world" cannot be converted to number , so it is NaN


// console.log(a===b)  // ! false , because NaN is not equal to NaN , NaN is not equal to anything , NaN is not equal to itself also , infinity is not equal to infinity , just like infinity , NaN is also not equal to anything

// console.log(typeof(a)) // ! number , because a is NaN , but typeof(NaN) is number , it is a bug in javascript , but NaN is not a number , it is a special value which means not a number , but typeof(NaN) is number , it is a bug in javascript

// * just like infinity x , y axis lies on infinity , but infinity is not equal to infinity , just like infinity , NaN is also not equal to anything and its number

// console.log(3+2+"1") // * 51 , because 3+2 is 5 , 5 is converted to string and concatenated with "1"

//* why? because + operator is left to right associative , so 3+2 is evaluated first , then 5 is converted to string and concatenated with "1"

// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// * == , <=, >= , - ,+,/ -------> all do number conversion
// * + in between a string and number does string concatenation
// * + in Unary operator does number conversion

// console.log(+"Hello" + "world")  // * NaNworld , because +"Hello" is NaN , but +"Hello" is converted to string and concatenated with "world"

// console.log(0+"0") // * 00


// * conversion (-) 

// console.log(1-"1") // * 0 , because 1 is number and "1" is string , so "1" is converted to number and subtracted from 1
// console.log(1-"a") // * NaN , because 1 is number and "a" is string , so "a" is converted to number and subtracted from 1 , but "a" cannot be converted to number , so it is NaN


// ! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

// var a =[1,2,3,"hello",true,null,undefined,1,2,3,4,5]
// console.log(a) // * [ 1, 2, 3, 'hello', true, null, undefined, 1, 2, 3, 4, 5 ]
// * array internaly stored as object

// var a =[1,2,3,"hello",true,null,undefined,1,2,3, function(){console.log("hello")},4,5]
// console.log(a) // * [ 1, 2, 3, 'hello', true, null, undefined, 1, 2, 3, [Function (anonymous)], 4, 5 ]

// * array can store any type of data , it can store function also , it can store another array also , it can store object also

// assignment by value 
// var a = 10
// var b = a
// console.log(a,b) // * 10 10
// b = 20
// console.log(a,b) // * 10 20

// assignment by reference
// var a = [1,2,3]
// var b = a
// console.log(a,b) // * [ 1, 2, 3 ] [ 1, 2, 3 ]
// b[0] = 10
// console.log(a,b) // * [ 10, 2, 3 ] [ 10, 2, 3 ]

// * array is stored in heap memory , and it is stored by reference , so if we change b , a will also change , because both are pointing to same memory location

// var a = [1,2,3]
// var b = a;
// a=[]
// console.log(a) // * [] , because a is pointing to new memory location , so old memory location is garbage collected
// console.log(b) // * [ 1, 2, 3 ] , because b is pointing to old memory location , so old memory location is not garbage collected
// * Garbage collection in js means 
// * memory not reachable is garbage collected

// a.length=0
// console.log(a) // * [] , because a is pointing to new memory location , so old memory location is garbage collected


// a.length=10
// console.log(a) // * [ <7 empty items> ] , because a is pointing to new memory location , so old memory location is garbage collected

// console.log(null==undefined) // * true , because null and undefined are equal to each other , but they are not equal to anything else

// console.log(null===undefined) // * false , because null and undefined are not equal to each other , but they are not equal to anything else

// console.log(null===null) // * true , because null and null are equal to each other , but they are not equal to anything else

// console.log(undefined===undefined) // * true , because undefined and undefined are equal to each other , but they are not equal to anything else

//! ################################################# ABOVE TOPIC ENDS HERE ####################################################################

var b= new Array(10)
console.log(b) // * [ <10 empty items> ] , because b is pointing to new memory location , so old memory location is garbage collected
// *  new ?  new is a keyword , it is used to create object , it is used to create array , it is used to create function , it is used to create class , it is used to create instance of class

// * new Array(10) is used to create array of size 10 , but it is not used to create array of 10 elements , it is used to create array of 10 empty elements


// constructor function , 
// * constructor function is a function which is used to create object , it is used to create array , it is used to create function , it is used to create class , it is used to create instance of class

console.log(false ==0)  // * true , because false is converted to 0 , and 0==0 is true
console.log(false ===0) // * false , because false is not converted to 0 , and false is not equal to 0