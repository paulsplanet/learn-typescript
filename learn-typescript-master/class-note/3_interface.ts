// interface for variables
interface User {
    age: number;
    name: string;
}

const seho: User = {
    age: 33,
    name: 'seho',
}


// interface for function
function getUser(user: User) {
    console.log(user)
}

const cap = {
    name: 'rogers',
}
getUser(cap);       // if I have only name in "cap", age is missing so error.

// const cap ={
//     name: 'rogers',
//     age: 28,
// }
// getUser(cap);       this is the correct way

// use interface for structure of function
interface SumFunction {
    (a: number, b: number): number;
}

let hab: SumFunction;
hab = function(a: number, b: number): number {
    return a + b;
}

//  indexing
interface StringArray {
    [index: number]: string
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0];     // 'a'
arr[1] = 10;    // 10 is not a string => error

// Dictionary Pattern
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    // cssFile: 'css'  //  right side has to be "RegExp" by Dictionary Pattern
    cssFileTwo: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value){

})

//  interface extension
interface Person {
    name: string;
    age: number;
}

// interface Developer {
//     name: string;
//     age: number;
//     language: string;
// }   =>
interface Developer extends Person {
    language: string;
}

var captain: Developer = {
    language: 'eng',
}                               // missing properties of name & age