"use strict"

// let person={
//     name:'Nag',
//     age:34
// };

//-----------------------------------------------

//Object.defineProperty(person,'name',{configurable:false,writable:false});

//-----------------------------------------------
// Object.preventExtensions(person);
// Object.seal(person);  +  preventExtensions(person)
// Object.freeze(person);  +  preventExtensions(person) + seal(person)


// person.newProp="bla bla";
// delete person.age;
// person.name="hell";

//------------------------------------------------


let person={
    _name:'Nag',
    _age:34,
    set name(name){
        if(name){
            this._name=name;
        }
    },
    get name(){
        return this._name;
    }
};

person.name="Nag N";  // set
console.log(person.name); // get