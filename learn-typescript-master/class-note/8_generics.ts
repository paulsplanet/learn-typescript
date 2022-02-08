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
