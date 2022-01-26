function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');

// Union type : make it uses more than one type, symbol is ' | '
function writeMessgae(value: string | number) {
    console.log(value);
}

writeMessgae('hello');
writeMessgae(300);


function typeMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();          // when I typed value. => shows me number function
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');      // when type is not string or number
}

typeMessage('hello')

/* --------------------------------------------------------------------------------- */
interface Develop {
    name: string;
    skill: string;
}

interface Human {
    name: string;
    age: number;
}

function askSomeone(someone: Develop | Human) {
    someone.name;            // when I use union function of two interface, only common property is accessable
                            // it is name here. when I type someone.  then it shows only name (no, skill and age)
    someone.skill           // this is not a common property of Develop and Human => error             
}
askSomeone({ name: 'paul', skill: 'developing' });
askSomeone({ name: 'daekun', age: 25 })


// Intersection type, symbal is  '  &  '
function askHim(someone: Develop & Human) {
    someone.name;
    someone.skill;
    someone.age;                    // Intersection type contains both Develop & Human properties
}

askHim({ name: 'paul', skill: 'developing' })       // age is missing => error