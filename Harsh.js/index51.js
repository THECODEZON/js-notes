// callback function
function myFunc2(name){
    console.log("insdie my func 2")
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log("hello there is deepa...")
    callback("deepa");
}
myFunc(myFunc2);