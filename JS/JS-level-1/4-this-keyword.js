

/*

    this ==> context's owner

*/


//-------------------------------------------------------------------------------

// why we 'this' keyword?

// let pName="Global";
// let person={
//     pName:'Nag',
//     sayName:function(){
//         let pName="Local";
//         console.log('im '+pName); // context's hierarchy data
//         console.log('im '+person.pName); // obj's data
//         console.log('im '+this.pName); // context's owner data
//     }
// };
// // person.sayName();
// let oldPerson=person;
// person={
//     pName:'Ria',
//     sayName:function(){
//         console.log('im '+person.pName);
//     }
// }

// oldPerson.sayName();

//-------------------------------------------------------------------------------


// function binding

/*

    - static function-binding
    - dynamic function binding

*/

//-------------------------------------------------------------------------------

// - static function-binding

// let p1={name:'Nag',sayName:function(){console.log('im '+this.name); }};
// let p2={name:'Ria',sayName:function(){console.log('im '+this.name); }};

// or

// function sayNameForAll(){
//     console.log('im '+this.pName);
// }
// let p1={pName:'Nag',sayName:sayNameForAll}
// let p2={pName:'Ria',sayName:sayNameForAll}

// sayNameForAll(); // im ??
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria

//-------------------------------------------------------------------------------


// dynamic function-binding
//---------------------------


let greetLib = {
    name: 'greet-lib',
    sayName: function (message,from) {
        console.log(message + ' im ' + this.name +" : "+from);
    }
};

let person = { name: 'Nag' }
let employee = { name: 'ibs' }

// // way-1 :  call()
// greetLib.sayName.call(person,"hello","chennai");
// greetLib.sayName.call(employee,'dude',"india");

// // way-2 : apply()
// greetLib.sayName.apply(person,["hello","chennai"]);
// greetLib.sayName.apply(employee,["hi","chennai"]);

// way-3 :  : bind() 
// let personSayNameFunc=greetLib.sayName.bind(person,"hello","chennai");
// personSayNameFunc();
// personSayNameFunc();

// let employeeSayNameFunc=greetLib.sayName.bind(employee);
// employeeSayNameFunc("hey","chennai");
// employeeSayNameFunc("dude","bengalore");


//--------------------------------------------------------------


// function Person(name,age){
//     this.name=name;
//     this.age=age;

//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         console.log('im '+this.age + ' old ');
//     }
// }

// let p1=new Person('Nag',34);
// let p2=new Person('Ria',3);


//--------------------------------------------------------------


/*

    in .js, we can invoke functions in 4 ways

    1. function invocation   ( this ==> gobal-object )
    2. method invocation ( static function-binding ) ( this ==> invoker-object )
    3. call/apply/bind invocation ( dyanmic function-binding ) ( this ==> arg-object)
    4. constructor invocation  ( this ==> new-object )

*/