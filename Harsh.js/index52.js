// function returning
function myFunc(){
    function hello(){
        console.log("hello world")
    }
    // return{name:"deepa",age:30
    return hello();
}
    

const ans = myFunc();
console.log(ans);