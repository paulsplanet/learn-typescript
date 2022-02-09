function fetchItems() {                 // hover => TS automatically guess return as string[] becuase return items are defined in a function as string[]
    var items = ['a', 'b', 'c'];            
    return items;
};
var result = fetchItems();
console.log(result);


// function fetchPromise() {                   // hover => return: unknown. TS can't guess type of Promise
//     let items = ['a', 'b', 'c'];
//     return new Promise(function (resolve) {
//         resolve(items);
//     })
// }

/* how to fix it? - Promise defined by generic in TS */
function fetchPromise(): Promise<string[]> {                   
    let items: string[] = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items);
    })
}
fetchPromise();