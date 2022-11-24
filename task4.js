//num1 ni ichida num2ga bo'linadigan sonlarni topish 
let num1 = 25;
let num2 = 4;
let arr = [];

function func(a, b) {
    for (let i = 0; i < Math.floor(a / b); i++) {
        arr[i] = b * (i + 1)
    }
    return arr;
}

console.log(func(num1, num2));