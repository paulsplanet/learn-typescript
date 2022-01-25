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