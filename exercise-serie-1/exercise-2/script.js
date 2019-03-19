//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function calculate(obj) {



let num1=parseFloat(document.getElementById("number1").value);
let num2=parseFloat(document.getElementById("number2").value);

let result=obj;

let resultField= document.getElementById("sum");

if(result === "+"){
    resultField.value = num1+num2;
}

if(result === "-"){
    resultField.value = num1-num2;
}

if(result === "*"){
    resultField.value = num1*num2;
}

if(result === "/"){
    resultField.value = num1/num2;
}


}