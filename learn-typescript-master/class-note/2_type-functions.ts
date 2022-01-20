// define type of parameters in function
function plus(a: number, b: number) {
    return a + b;
}

plus(10, 20);

// define type of return of a funciton
function add(): number {
    return 10
}

// overall define types in a functions
function duhaki(a: number, b: number): number {
    return a + b
}

duhaki(1, 2, 3, 4, 5)   // *TS know there are more parameters, not like JS


// TS function's optional parameter
function log(a: string, b?: string) {

}

log('hello world');
log('hello TS', 'abc');

// ex2
function wrongLog(a: string, b: string) {

}

wrongLog('hello world');    // error becasue of only 1 parameter while function needs 2 parameters
wrongLog('hello TS', 'abs');

