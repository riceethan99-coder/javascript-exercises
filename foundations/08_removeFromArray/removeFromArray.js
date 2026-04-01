const removeFromArray = function(arr, ...nums) {
   return arr.filter(element => !nums.includes(element))
}
removeFromArray([1, 2, 3], "1", 3)
// Do not edit below this line
module.exports = removeFromArray;
