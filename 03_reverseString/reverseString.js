const reverseString = function(string) {
    const reversedArray = []
    for(let i = 0; i < string.length; i++){
        reversedArray.push(string[i])
    }
    return reversedArray.reverse();
};

// Do not edit below this line
module.exports = reverseString;
