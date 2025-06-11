// first code is About Factorial OF a Number
let number = 5
let fact = 1
for( let i = 1; i<= number;i++){
  fact = fact * i;
}

console.log(fact)

// i want to do it with recursion
function factorial(num){
  if(num == 0){
    return 1;
  }
  return num *= factorial(num-1);
}

console.log(factorial(5))