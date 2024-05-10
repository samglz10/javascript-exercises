const add = function(num1, num2) {
	const total = num1 + num2;
  return total;
};
add(0,0)
const subtract = function(num1, num2) {
	const total = num1 - num2;
  return total
};
subtract(10,4)


const sum = function(arr) {
	let total = arr.reduce((total, current)=> total + current,0)
  return total
};



const multiply = function(arr) {
  return arr.reduce((total, current)=> total + current)
};


const power = function(num, power) {
  let total = num**power;
  return total;
};


const factorial = function(num) {
  let total = 1;
	for(let i = num; i > 0; i--){
    total *= i
  }
  return total;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
