//  Structural Typing

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