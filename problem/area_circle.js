const prompt = require('prompt-sync')()
let radius = parseInt(prompt('Enter radius :'))

function circle(radius){
    const area = (radius * radius * Math.PI)
    return area
}

console.log(circle(radius))