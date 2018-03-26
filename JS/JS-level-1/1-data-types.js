

/*

     .js - data-types
     -------------------

     1. simple/primitives ==> values
         a. string
         b. number
         c. boolean
         d. undefined
     2. complex/reference ==> objects


*/

//------------------------------------------
// 1. simple/primitives ==> values
//------------------------------------------

// a. string

var name = "Nag"
var selection = 'abc'

// var dynamicString = "the value is " + (2 + 2);
// var multiLineString=" hello how r u " +
//                     " im doing good " 

// from ES6 ==> string iterpolation

var dynamicString = ` the value is ${2 + 2} `
var multiLineString = `
   <div>
        <h1> ${10 + 10} </h1>
   </div>
`

//------------------------------------------

// b. number

var count = 12;
var cost = 12.12;


//------------------------------------------

// c. boolean

var found = true;

/*
    // imp-note : falsy values in .js language
    
    ==> false,0,"",null,undefined,NAN

    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/

// if(NaN){
//     console.log('i will not execute');
// }

//------------------------------------------


// d. undefined

var v;


//-----------------------------------------
// 2. complex/reference ==> objects
//-----------------------------------------

/*
    how to create object in .js-language ?

    syntax:
    var ref=new Constructor();

    imp-note : all constructor function(s) must have 'pascal' naming convetion

    by default,

    -> all objects are 'extensible' & configurable

*/

// var config=new Object();
// config.url="http://";
// config.httpMethod="GET";
// config.success=function(){
//     console.log('doing something on success...');
// }

// delete config.httpMethod;


//------------------------------------------

// literal-style object(s)

//------------------------------------------


// a. Object

// var config=new Object(); // obj wrapper
// config.url="http://";
// config.httpMethod="GET";
// config.success=function(){
//     console.log('doing something on success...');
// }


// or ( literal-style)

// var config={
//     url:'http://',
//     httpMethod:'POST',
//     success:function(){
//         console.log('ohh ya success');
//     }
// };



//------------------------------------------

//  Array

/*
    array/list:
    ------------
    -> can hold any type of element(s)
    -> size can grow dynamically

*/

// var arr=new Array();
// arr.push('item1');
// arr.push('item2');
// arr.push('item3');

// or

// var arr=["item1","item2","item3"];
// arr.push("item4");


//------------------------------------------

// RegExp  ==> for pattern matching

// var adharPattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");
// var isValid=adharPattern.test("1234-4567-5678");

// or

// var adharPattern=/\d{4}-\d{4}-\d{4}/;
// var isValid=adharPattern.test("1234-4567-5678");



//------------------------------------------

// Function

/*

    imp-note:

    ==> every function is 'object'

*/


// var add=new Function("n1","n2","var result=n1+n2;return result");

// or ( literal style )

// function add(n1, n2) {
//     var result = n1 + n2;
//     return result;
// }


//------------------------------------------


// How to access obj's properties?

/*

    2 ways

    way-1 : using ' . ' notation  is property name is valid identier
    else
    way-2 : using ' [] ' notation

*/

// var person={
//     name:'Nag',
//     'home-address':"chennai"
// };

// person.name="Nag N"; // set
// console.log(person.name); // get

// person["home-address"]="bengalore";
// console.log(person["home-address"]);


//------------------------------------------

// q1

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
// }

// var p=new Person('Anusha',0);

// q2

// var re=/\d{10}/;


