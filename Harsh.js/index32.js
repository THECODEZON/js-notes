// array destructing
const myArray = ["value1","value2","value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[0];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1, myvar2, myvar3, ] = myArray;
// myvar1 = "value changed";
let myNewArray = myArray.slice(2);

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log("value of myvar3", myvar3);
console.log(myNewArray);

