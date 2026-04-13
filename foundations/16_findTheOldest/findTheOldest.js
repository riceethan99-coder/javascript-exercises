const findTheOldest = function(array) {
   return array.reduce((oldest, currentPerson) => {
        const oldestAge = oldest.yearOfDeath === undefined ? 2026 - oldest.yearOfBirth : oldest.yearOfDeath - oldest.yearOfBirth
        const currentAge = currentPerson.yearOfDeath === undefined ? 2026 - currentPerson.yearOfBirth : currentPerson.yearOfDeath - currentPerson.yearOfBirth
        return currentAge > oldestAge ? currentPerson : oldest
   }, array[0])
};

// Do not edit below this line
module.exports = findTheOldest;
