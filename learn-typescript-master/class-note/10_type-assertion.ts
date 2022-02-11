//  type assertion
let a;
a = 20;
a = 'a';
let b = a as string;    // developer force the type to varialbe. developer know a type more than TS


// DOM API (assess to tag on webpage = queryselector...)

<div id="app">hi</div>

let elem = document.querySelector("#app")

// general example
let div = document.querySelector("div");
if (div) {                              // check if there is div because nobody sure if there is div when run the code =  div can be null
    div.innerText = 'hello';
}
