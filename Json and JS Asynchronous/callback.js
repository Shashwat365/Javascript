function myDisplayer(value){
    console.log(value)
}
function myCalculator(num1,num2,myCallback){
    let sum = num1 +num2;
    myCallback(sum)
}
myCalculator(6457,578907,myDisplayer)