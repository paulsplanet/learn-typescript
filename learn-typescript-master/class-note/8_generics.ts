//  JS
function logText(text) {
    console.log(text);
    return text;
}


//  TS Generic
function showText<T>(text: T): T {
    console.log(text);
    return text;
}

showText('hello');      // set type when call the function
showText<string>('goodbye');        // set the parameter type when call the function -> looks more generic style

/*
without generic - make functions for each type of parameters even if the logic is the same.

function logText(text: string) {
    console.log(text);
    return text;
}
logText('hi');

function logNumber(num: number) {
    console.log(num);
    return num;
}
logNumber(10);

*/

/*
without generic - using Union type

function logText(text: string | number) {
    console.log(text);
    return text;
}
const a = logText('a');
a.split('');            => error ( a is Union of string and number, split is string function. it only allows methods can be used both in )
*/


// declare generic in interface
interface Drop<T> {
    value: T;
    selected: boolean;
}

const obj: Drop<number> = { value: 20, selected: false }
const objTwo: Drop<string> = { value: 'abc', selected: false }


//  limit the type in generic
function logTextLength<T>(text: T[]): T[] {     // let function know that T is array. so function is ready to use array method like length and forEach.
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text)
    })
    return text;
}

logTextLength<string>(['hi', 'abc']);


//  limit the type in generic 2 - use defined type
interface LengthType {
    length: number;

}

function textLength<T extends LengthType>(text: T): T {
    text.length;            // if there is no defined type for receiving, length is error. because function didn't know what type of parameter received
    return text;
}

textLength('abc');              // string has length method
textLength({ length: 20 });


//  limit the type in generic 3 - use keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

/* keyof = T will be one of ShoppingItem's key(name, price, stock) */
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;

}

// ctrl + space = auto fill (to fill out name | price | stock automatically)
getShoppingItemOption("name")