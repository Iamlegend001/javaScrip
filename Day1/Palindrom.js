// this is the second Code and This is the Palindrome program;
let str = "mom";
let rev = ""
for(let i = str.length-1;i>=0;i--){
  rev += str[i]
}
console.log(rev)
if(rev == str){
  console.log("palindrome")
}else{
  console.log("not")
}

//lets write it in a recursion function
function palindrome(str){
  if( str.length == 0) return 1;
  if(str[0] === str.length -1){
    return palindrome(str.substring(1,str.length -1))
  }
}
console.log(palindrome("moom"))
