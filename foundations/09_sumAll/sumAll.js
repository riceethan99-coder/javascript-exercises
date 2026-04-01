const sumAll = function(num1, num2) {
    let num3 = 0
    
    if(num1 > num2) {
    let a = num1
    num1 = num2 
    num2 = a
    }
    
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    
    for(i = num1; i <= num2; i++) {
        num3 = num3 + i
    }

    return num3
};

sumAll(10, [90, 1])
// Do not edit below this line
module.exports = sumAll;
