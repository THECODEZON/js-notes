// functions inside function
function app(){


const myFunc = () =>{
    console.log("hello from myFunction")
}
const addTwo = (num1, num2) => {
    return num1 + num2;
}
const mul = (num1, num2) =>{
    return num1*num2
}
console.log();
console.log(addTwo(22,44))
console.log(mul(22,44))
}
app();