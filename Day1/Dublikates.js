// Find Dublicats in an Array
let arr = [,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
let dublicate = []
for( let i = 0; i<arr.length;i++){
  for( let j = 0;j<arr.length;j++){
    if( i!= j && arr[i]=== arr[j]){
      dublicate.push(arr[i])
    }
  }
}
console.log(dublicate)

// remove duplicate
let dublicate2 = []
for( let i = 0; i<dublicate.length;i++){
  if(dublicate2.indexOf(dublicate[i]) == -1){
    dublicate2.push(dublicate[i])
  }
}
console.log(dublicate2)