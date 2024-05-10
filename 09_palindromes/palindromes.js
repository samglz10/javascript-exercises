const palindromes = function (word) {
    const cleanedString = word.toLowerCase().split('').join('');
    console.log(cleanedString)
    const arr =[...cleanedString];
    const revereseArr = arr.reverse();

    if(arr === revereseArr){
        return true
    } 
    /*
        for(let i = word.length -1; i >= 0; i--){
            const character = word[i];

        }
    */
    };
    palindromes('Animal loots foliated detail of stool lamina.')


// Do not edit below this line
module.exports = palindromes;
