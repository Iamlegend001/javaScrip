function sum(num){
  if(num ==0) return 0;
  return num%10 + sum(Math.floor(num/10))
}