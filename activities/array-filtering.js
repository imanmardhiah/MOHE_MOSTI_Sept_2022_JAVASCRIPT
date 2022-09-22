const numbers = [1,2,3,4,5,6,7,8,9,10]
const filtered = numbers.filter(evenNumbers)

function evenNumbers (number) {
    return number % 2 === 0
}
console.log(filtered)

/*
The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
 */