const fibonacci = function(num) {
    Number(num)
    let num1 = 0
    let num2= 1
    let num3 = 0
    if(num < 0) {
        return "OOPS"
    } else {
    for(let a = 1; a <= num; a++) {
        num3 = num1 + num2 
        num1 = num2 
        num2 = num3 
    }
    return num1
} 
};

// Do not edit below this line
module.exports = fibonacci;
