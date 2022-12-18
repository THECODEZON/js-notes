// lexical 
function myApp(){
    const myVar = "value1";
    function myFunc(){
    // const myFunc2 = function(){}
    // const myFunc3 = () => {}
    const myVar = "value59";
    console.log("inside myFunc",myVar);
    }

    console.log(myVar);
    myFunc();
}
myApp();

function myName(){
    const mynaam ="deepa";
    function myCon(){
        const myNon ="nothing";
        console.log("hello",myNon);
    }
    myCon();
     console.log(mynaam);
}
myName();