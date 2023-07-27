
function calculator (a, b, operator){
    let totalValue = 0;
    if(operator == "+"){
       totalValue = a + b;
    }else if(operator == "-"){
       totalValue = a - b;
    }else if(operator == "*"){
        totalValue = a * b;
     }else{
        totalValue = a / b;
     }
     return totalValue;
}

let givenInput = calculator(10, 5, "*")
console.log(givenInput)
