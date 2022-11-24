//max va min ni topish arrayda
let array = [1,2,3,4,5,6,7,8,9]
let max=0
let num=0
let sum=0
let min=0
for (let i=0; i<array.length; i++){
if(max<array[i]){
  max=array[i]
}
}
for (let j=0; j<array.length; j++){
  num=max-array[j]
  if(num>sum)
  sum=num
}
min=max-sum


console.log(min, max);