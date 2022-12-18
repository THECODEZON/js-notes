// default parameter
// function addTwo(a,b){
//     if(typeof b==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }
function addTwo(a,b=0){
    return a+b;
}
const ans = addTwo(99,99);
console.log(ans);

function subtwo(a,b=0){
    return a-b;
}
const ans1 = subtwo(1000-999)
console.log(ans1)