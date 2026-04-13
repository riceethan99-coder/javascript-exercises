const palindromes = function(word) {
    word = word.toLowerCase()
    word = word.replace(/[^a-z0-9]/g,'')
    let arr = word.split("")
    let reverseArray = arr.reverse()
    let reversedWord = reverseArray.join("")
    return word == reversedWord

};

// Do not edit below this line
module.exports = palindromes;
