//dublikat sonlarni chiqarmaslik arrayda M: [1,3,4,5,5,5,5,6] m:[1,3,4,5,6]
let arr=[1,2,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,6,54,5]
function dubarr(array) {
  let obyekt={}
  for(let i=0; i<array.length; i++){
    obyekt[array[i]]=array[i]
  }
  return Object.values(obyekt) 
  
}
console.log(dubarr(arr));