'use strict'

// Assignment 1 
for(let i = 1; i <= 200; i++){
    if(i % 6 === 0 ) {
        console.log(i + ' Shams');
    } else if(i % 8 === 0) {
        console.log(i + ' Tiidelab');
    } else if(i % 6 == 0 && i % 8 == 0) {
        console.log(i + 'ShamsTiidelab');
    } else {
        console.log(i);
    }
}


// Assinment 2 

const gridSize = function(size) {
    let s = '';
    for(let row = 0; row < size; row++){
        let odd = row % 2 == 0;
        if(odd) {
            s += ' '
        }
        for (let column = 0; column < size; column++){
            s += '#';
        }
        // new line
        s += '\n' 
    } 
    return s
}
console.log(gridSize(8));