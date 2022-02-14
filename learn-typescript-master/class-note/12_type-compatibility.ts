//  Structural Typing, Type compatibility = interface & class

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let develop: Developer;
let human: Person;

develop = human;        // right side has to be bigger, larger
human = develop;        // human - only name, develop - name & skill

class Ingan {
    name: string;
}
develop = new Ingan();  // if add skill in Ingan, then this works

/* structural typing compare the inside parameters and its types */


//  Structural Typing, Type compatibility = function & generic

let add = function(a: number): number {
    return a;
}

let sum = function(a: number, b: number): number {
    return a + b;
}

add = sum;      // add take only one parameter, while sum takes two parameters
sum = add;      // sum takes 2 while add takes 1.

// generic
interface Empty<T> {
    
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;        // both directions are working


interface NotEmpty<T> {
    data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;      // date was assigned by each type already = cannot be same.
