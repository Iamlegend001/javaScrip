// let find max in an array
let arr = [1,2,3,4,5,6,7,8,9];
let max = Math.min(...arr);
for( let i = 0; i<arr.length;i++){
  if(max<arr[i]){
    max = arr[i]
  }
}
console.log(max)
