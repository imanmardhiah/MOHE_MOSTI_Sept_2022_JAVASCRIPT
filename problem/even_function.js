const prompt = require('prompt-sync')();
const num = parseInt(prompt('Display even number until: '));
let output = [];

for(i=1; i<=num; i++){
    if(!(i%2)) output.push(i);
}

console.log('Even Number list : '+ output);