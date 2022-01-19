function TsSum(a: number, b: number): number {
    return a + b;
}
// TsSum(...): number <- this means output is also number

//TsSum(10, "20");    // error because type of "20" is not correct

let result = TsSum(10, 20);
result.toLocaleString();
