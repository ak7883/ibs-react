

/*

    Execution-context/scope
    -------------------------

    memory/stack-frame with given args & locals 
    to execute instructions in seq.

    phases:

    phase-1 : context-creation / push

        => any variable declared with 'var' keyword any-where whin context,
           will get hoisted to top with default-value ( undefined )

    phase-2 : context-execution / pop

        => instructions will get execute in seq.

    --------------------------------------------------
    
    imp-notes:

    by default , 

    ==> every .js-runtime has 1 global-context / global-scope
    ==> global-context always executed by 'global-object'


    global-obj 
    -----------

        browser-envi  ==> 'window'
        Node.js       ==> 'process'

    
    --------------------------------------------------


    every function-invocation also creates new-context,
    which is child context of in-which context that function has declared.


    --------------------------------------------------

    best-practice : always declare variables at top ( global | function )


*/

// ---------------------------------------------------

// console.log(v);
// var v=12;

// ---------------------------------------------------


// var v=12;

// function f1(){
//     console.log(v);
//     var v=13;
// }

// f1();  // f1-context  <--- global-context

// ---------------------------------------------------

// Quiz:


// var v=12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     f2(); // f2-context  <--- f1-context
//     var v=13;
// }
// f1();  // f1-context  <---- global-context


// ---------------------------------------------------

// var v=12;
// var v=13;

// ---------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

// ---------------------------------------------------


/*

 problems with 'var' keyword

 ==> variable always get hoist
 ==> we can re-declare same variable multiple times within context
 ==> No block-scope to variable(s) within context i.e by default variables can be in global-scope or function-scope

   soln : in ES6 

    --> using 'let' & 'const' keywords with block-scope

 */

 // ---------------------------------------------------

//  console.log(v); // error
//  let v=12;

// ---------------------------------------------------

// let v=12;
// let v=13; // error

// ---------------------------------------------------

let v=100;
if(true){
    let v=200;
    console.log(v);
}
console.log(v);

// ---------------------------------------------------

const person={
    name:'Nag'
};
// person=null; // error
person.name="Nag N";

// ---------------------------------------------------

// if variable is 'mutable reference ' ==> 'let' keyword
// if variable is 'immutable reference ' ==> 'const' keyword

// best-practice : avoid 'var' keyword
// ---------------------------------------------------

