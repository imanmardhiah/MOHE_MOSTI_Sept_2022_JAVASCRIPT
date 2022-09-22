const car = {
    make: 'Honda',
    model: 'Accord',
    year: 2020
}
const keys = Object.keys(car)
//Object.keys() prototype method
//The above code will print an array of strings, where each string is a key in the car object. ['make', 'model', 'year'] 
console.log(keys)