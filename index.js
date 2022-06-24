const num1 = parseFloat(prompt("Enter n1:"));
const num2 = parseFloat(prompt("Enter n2:"));

const operator = prompt("Enter operator(+,-,*,/");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("It's a simple calc. That won't work smh")
}else{
    if(operator== "+"){
        result = num1 + num2;
    }else if(operator == "-"){
        result = num1 - num2;
    }else if(operator == "/"){
        result = num1 / num2;
    }else if(operator == "*"){
        result = num1 * num2;
    }
    alert(num1+operator+num2+"=" + result);
}