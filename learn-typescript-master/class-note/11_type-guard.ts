
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'IronMan' }
}
let tony = introduce();
console.log(tony.skill);     // skill is not common parameter of Developer and Person => error because of Union
console.log(tony.name);     // name is common parameter

// use ' type assertion '
if ((tony as Developer).skill) {
    console.log((tony as Developer).skill)
} else if ((tony as Person).age) {
    console.log((tony as Person).age)
}


//  type guard
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    tony.skill;
} else {
    tony.age;       // there is age in auto fill after type tony.
}