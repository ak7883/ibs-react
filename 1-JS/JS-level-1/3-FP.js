




/*


    // Functional Programming ( FP )  in JavaScript
    -----------------------------------------------

        
     - A function can be stored in a variable or object
     - The return value of a function can be a function
     - A parameter of a function can be a function


     we can create function in 2 ways  

      a. function-declaration

            - named function
            - function-obj created at context-creation phase
            - always get hoisted with function-object

      b. function-expression

            - anonymous function
            - function-obj will create at context-execution phase
            - we can invoke only after that expression

            when to use : based on input/condition, to create function dynamically

*/

//----------------------------------------------------------

// a. function-declaration

// console.log(add(12,13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,13));

//----------------------------------------------------------


// b. function-expression

// console.log(add(12,13));  ReferenceError

let add=function(n1,n2){
    return n1+n2;
}

// console.log(add(12,13));


//----------------------------------------------------------


// e.g

// let userType;  // admin | guest
// let action;
// // declaration
// function login(){
//     //..
//     userType='guest';
// }
// login();
// if(userType==="admin"){
//     // expression
//     action=function(){
//         console.log('admin action..');
//     }
// }else{
//     action=function(){
//         console.log('guest action..');
//     }
// }
// action();


//----------------------------------------------------------



// - A function can be stored in a variable or object


// function greet(){
//     console.log('Hello...');
// }

// let sayHello=greet;
// sayHello();


//----------------------------------------------------------


// - A parameter of a function can be a function

// function add(n1,n2){
//     return n1+n2;
// }
// console.log(add(1,2));


// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('greetings..');
// }

// greet();
// greet(function () { console.log('Hello...') });
// greet(function () { console.log('Vanakkam...') });

// e.g


// let nums=[1,3,5,7,9,2,4,6,8,10];
// nums.sort();
// nums.sort(function(a,b){
//     return a-b;
// });
// console.log(nums);



//----------------------------------------------------------


// The return value of a function can be a function

// function teach(){
//     console.log('teaching...');
//     let learn=function(){
//         console.log('learning...');
//     }
//     return learn;
// }

// let learnFunc=teach();
// learnFunc();
// learnFunc();



//----------------------------------------------------------

// imp-note : every function context 1 implicit object called 'arguments'

// function func(a,b,c,d,e){
//     console.dir(arguments[0]);
//     console.dir(arguments[1]);
//     console.dir(arguments[2]);
//     console.dir(arguments[3]);
//     console.dir(arguments[4]);
// }
// func(1,2,3,4,5);


// e.g sum of n number


// function sum(){
//     let result=0,
//         i=0,
//         len=arguments.length;

//     while(i<len){
//         result+=arguments[i];
//         i++;
//     }    
//     return result;
// }



//----------------------------------------------------------


// function getFood(pay){
//     if(arguments.length===0)return "No food";
//     return "biryani";
// }
// console.log(getFood());

//----------------------------------------------------------


// in ES6 

/*

    - function with default params
    - function with rest param

*/


//----------------------------------------------------------

// - function with default params

// function func(a=1, b=2) {

//     // if(!a)a=1;
//     // if(!b)b=2;
//     // or
//     // a = a || 1;
//     // b = b || 2;

//     console.log(a);
//     console.log(b);
// }

// func(undefined, 20);

//----------------------------------------------------------


// - function with rest param

function func(a,b,...restParam){
    console.log(a);
    console.log(b);
    console.dir(Array.isArray(restParam));  // true
    console.dir(restParam); // rest params
    console.dir(arguments); // all params
}

// func(1,2,3,4,5,6,7,8,9);


//----------------------------------------------------------



// closure  ( important topic )
//-------------------------------

/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/


// function teach(sub) {
//     console.log(`teaching ${sub}`);
//     let notes = `${sub}-notes`;
//     let fun='bla bla bla';
//     function learn() {
//         console.log(`learning with ${notes}`);
//     }
//     //learn();
//     console.log('teching ends.....');
//     return learn;
// }


// let learnFunc=teach('.js'); // 
// learnFunc(); // after teach context, we r invoking leran function

// learnFunc=null;

//--------------------------------------------------------


// why/where we need closures in .js-lang?

/*

    => to abstract public behav of any javascript-module
    => while executing function async, to access parent-scoped data


*/

//--------------------------------------------------------

// => to abstract public behav of any javascript-module


/*

    counter module

        - count
        - doCount()
        - getCount()

*/

// imp-note : global(s) are bad in .js-lang , avoid them


// self-executable function or Immediatly Invokable Function Expression ( IIFE )

const counter=(function moduleInit() {
    let count = 0; // private 
    // public behav ( closures of moduleInit)
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    let wrapper={
        increment:doCount,
        get:getCount
    };
    return wrapper;
})();




//--------------------------------------------------------
