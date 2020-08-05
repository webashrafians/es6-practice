// function doubleIt(num){
//     return num * 2;
// }


// const doubleIt = function(num){
//     return num * 2;
// }

// es6 function
const doubleIt = num => num * 2; // arrow function
const add = (x, y) => x + y; // arrow function with multi parameter
const give5 = () => 5; // without parameter function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
// const result = doubleIt(50);
const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result);
console.log(result2);
console.log(result3);