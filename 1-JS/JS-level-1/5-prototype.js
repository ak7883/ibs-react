
// without prototypes
//--------------------------
// function Person(name,age){
//     this.name=name;
//     this.age=age;

//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         console.log('im '+this.age +" old");
//     }
// }

// let p1=new Person('Nag',34);
// let p2=new Person('Praveen',44);

//-------------------------------------------------


// with prototypes
//--------------------------

// ES5 - class

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.sayName=function(){
//     console.log('im '+this.name);
// }
// Person.prototype.sayAge=function(){
//     console.log('im '+this.age +" old");
// }

// Es6 - class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

let p1 = new Person('Nag', 34);
let p2 = new Person('Praveen', 44);


//-------------------------------------------------



// let p={x:1,y:2};
// let c=Object.create(p);



//-------------------------------------------------



// Es6

// let x={a:1,b:2}
// let y={c:3}

// Object.setPrototypeOf(y,x);