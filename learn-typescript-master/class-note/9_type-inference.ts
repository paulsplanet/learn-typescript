//  type inference - when declare a variable
var a = 10;
var b = 'ab';

function getC(c = 10) {         // c = 10 mean basic value of c is 10 unless I pass some value through c.
    let d = 'hi';
    return c + d;
}


// type inference 2
interface Drop<T> {
    value: T;
    title: string;
}
let shoppingItem: Drop<string> = {
    value: 'high',
    title: 'hi',
}


// type inference 3
interface DropGo<T> {
    value: T;
    title: string;
}
interface DetailedDrop<K> extends DropGo<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDrop<string> = {
    title: 'abc',
    description: 'abcada',
    value: 'asdf',
    tag: 'tag1',
}


// best common type
let arr = [1, 2, true, 'hello'];;
