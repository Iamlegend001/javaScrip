// Lets Check any number is prime or not
let num = 3;
let count = 0;
for( let i = 0; i<= num; i++){
  if( num % i == 0){
     count++
  }
 
   
}
if(count == 2){
  console.log("prime")
}else{
  console.log("not prime")
}