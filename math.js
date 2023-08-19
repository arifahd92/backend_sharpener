console.log("hello world")
console.log("object")
function sum(...numbers) {
    // console.log(numbers)
    console.log("newarr")
    let newarr = [...numbers]
    console.log(newarr)
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3,)); // Output: 6
//console.log(sum(4, 5, 6, 7)); // Output: 22
//export { sum }