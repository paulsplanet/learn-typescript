//  ES2015 (ES6)
class Person {
    // write class logic - purpose: making instance
    constructor(name, age) {
        console.log('class has been created');
        this.name = name;
        this.age = age;
    }
}

let Paul = new Person('Paul', 35);

/*
this class is smae as 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('captain', 100)
*/



console.log(Paul);
/*
class has been created
Person {name: "Paul", age: 35} 
*/


//  JS prototype chain
var user = { name: 'capt', age: 10 };
var admin = {};
admin.__proto__ = user;


