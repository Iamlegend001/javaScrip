// lets reverse the String and Number
let str = "i am Maradona";
let rev = "";
for ( let i = str.length-1; i>=0;i--){
  let temp = str[i]
  rev += temp
}
console.log(rev)


//lets have the number 
let num = 123456789;
let revNum = 0;
for( let i = 0; i<num.length; i++){
  let temp = num%10;
  revNum = revNum*10  + temp;
  num = Math.floor( num/10)
}