const removeFromArray = function(arr, query) {
    const filteredArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== query){
        filteredArray.push(arr[i])
    }
  }
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
