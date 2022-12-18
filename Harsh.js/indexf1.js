// console.log('Happy birthday song');
function singHappyBirthday(){
    console.log("happy birthday to you.......");
}
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

function sumOfThreeNumber(number1, number2, number3){
    return number1+number2+number3;
}
// function sumOfTwoNumber(number1, number2){
//     return number1+number2;
// }
// function twoPlusFour(){
    // return(3+4);
    // console.log(3+4);
// }
// twoPlusFour();
// twoPlusFour();
// twoPlusFour();
// twoPlusFour();
// twoPlusFour();
// const returnedValue = sumOfThreeNumber(3,5,6);
// console.log(returnedValue)

// function sumOfFourNumber(number1 , number2 , number3 , number4){
//     return number1+number2+number3+number4;
// } 
// const returnValue = sumOfFourNumber(44,65,43);
// console.log(returnValue)

function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

// console.log(isEven(1909883))

function isOdd(number){
    if(number % 3 === 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isOdd())


function firstCharacter(anyString){
    return anyString[0];
}
// console.log(firstCharacter("zbc"));

// [1,5,9,27,6], 9
function firstTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,4,90]
const ans = firstTarget(myArray, 90);
console.log(ans)