// spread operators
// const array1 =[1, 2, 3];
// const array2 =[4, 5, 6];

// // const newArray = [...array1,...array2];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operators in object

const obj1 = {
    key1:"value1",
    key2:"value2"
};
const obj2 = {
    key1:"valueUnique",
    key3:"value20",
    key4:"value10"

};
// console.log(obj2)
// const newObject = {...obj2, ...obj1};
// add new key
// const newObject = {...obj2, ...obj1, key69:"value69"}
const newObject = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObject);