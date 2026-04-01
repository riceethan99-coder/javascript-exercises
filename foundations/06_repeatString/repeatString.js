const repeatString = function(string, num) {
    if(num >= 0) {
    let result = ""
    for(i = 0; i < num; i++) {
        result = result + string
    }
    return result 
} else {
    return "ERROR"
}
}


repeatString("", 10)
// Do not edit below this line
module.exports = repeatString;
