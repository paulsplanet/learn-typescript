//  Enums : set of specific values, in TS: there are string and number enums

enum Shoes {
    Nike,
    Adidas,
}

let myShoes = Shoes.Nike;
console.log(myShoes);       // 0    (number enum)
console.log(Shoes.Adidas);  // 1, automatically increased by 1 if we don't set up a specific values for enum

enum ShoesName {
    Nike = 'Nike',
    Adidas = 'Adidas',
}
 
let whoShoes = ShoesName.Nike;  // 'Nike'   (string enum)

//example

// regular TS function
// function askQuestion(answer: string) {
//     if (answer === 'yes') {
//         console.log('this is correct');
//     }
//     if (answer === 'no') {
//         console.log('this is wrong');
//     }
// }

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {      // parameter defined by enum
    if (answer === Answer.Yes) {
        console.log('this is correct');
    }
    if (answer === Answer.No) {
        console.log('this is wrong');
    }
}

askQuestion(Answer.Yes);       // function can take only parameter what enum provides
askQuestion('Yes');
