let numbers = { a: 13, b: 37, c: 42 };

let a = Object.values(numbers).map(function (num) {
    return num * 2;
});

console.log(a);


