type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [ K in Heroes]: number };
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000,
}


// for in Loop code
// var arr = ['a', 'b', 'c']
// for (var key in arr) {
//     console.log(arr[key])
// }