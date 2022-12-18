// // rest parameter
// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3,4,5,6.4,7,8);

// function addAll(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addAll(1,2,34,5)


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
// addAll(1,2,34,5)
const ans = addAll(1,2,3,);
console.log(ans);