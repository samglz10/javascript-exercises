const fibonacci = function(num) {
    if(num < 0){
        return 'OOPS'
    }
    const sequence = [0,1];
    for(let i = 2; i <= num; i++){
        //F(n) = F(n-1) + F(n-2)
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[num]
};

fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log('\n')
fibonacci(6); // returns 8
// Do not edit below this line
module.exports = fibonacci;
