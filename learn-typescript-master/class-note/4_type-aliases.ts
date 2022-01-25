// use type  => hover over Super after paul: -> there is detail info
type Super = {
    name: string;
    age: number;
}

let paul: Super = {
    name: 'paul',
    age: 35,
}


// use interface  => hover over Normal after daekun: -> there is no detail info
interface Normal {
    name: string;
    age: number;
}

let daekun: Normal = {
    name: 'daekun',
    age: 25,
}


/* ------------------------------------------------------------------- */
type MyString = string;
let str: MyString = 'hello';

type Todo = { id: number; title: string; done: boolean };
function getTodo(todo: Todo) {
    
}