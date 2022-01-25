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