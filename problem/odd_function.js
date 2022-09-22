const prompt = require('prompt-sync')();
const num = parseInt(prompt('Display odd number until: '));
let output = [];

for(i=0; i<=num; i++){
    if(i%2) output.push(i);
}

console.log('Odd Number : '+ output);