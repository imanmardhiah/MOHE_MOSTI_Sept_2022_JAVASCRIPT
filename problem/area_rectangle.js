const prompt = require('prompt-sync')()
let length = parseInt(prompt('Enter length :'))
let width = parseInt(prompt('Enter width :'))

function rectangle(length,width){
    const area = (length * width)
    return area
}

console.log(rectangle(length,width))