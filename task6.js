//2ni nta darajasini hosil qiladigan programma
let n=4
let arr=[]
function array(daraja) {
for(let i=0; i<=daraja; i++) {
  arr[i]=2**i
}
return arr
}
console.log(array(n));