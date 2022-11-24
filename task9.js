//a b sonlar berilgan o'zidan oldingi barcha sonlar yig'indisini hisolab borsin
let n = 8;
let a = 2;
let b = 5;
let arr = [a, b];

function create(param) {
    let sum = +arr[0] + +arr[1];
    for (let i = 2; i < param; i++) {
        arr[i] = +sum;
        sum += +arr[i]
    }
    return arr;
}
console.log(create(n));