//fibonache sonlarini chiqarish
let num = 20
let array =[1,1]
function fib(son) {
  for(let i=2; i<son; i++){
    array[i]=array[i-1]+array[i-2]
  }
  return array
}
console.log(fib(num));