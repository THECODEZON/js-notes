function app(){
    const myFunc =() =>{
        console.log("hello from myFunc")
    }
    const sub =(num1,num2) =>{
        return num1 - num2;
    }
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }
    const mul = (num1, num2) => num1*num2;

    console.log("inside app");
    myFunc();
    console.log( addTwo(22,23));
    console.log(mul(20,20));
    console.log(sub(22, 20));
}
app();