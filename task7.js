// arifmetik progressiyani dastlabki nta hadini chiqarish
let n=10
let a=20
let d=5
let array=[]
function arifprogressiya(a) {
  for(let i=0; i<=a; i++){
array[i]=a+(d*i)
  }
  return array
}
console.log(arifprogressiya(n));