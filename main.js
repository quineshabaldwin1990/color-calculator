const prompt = require('prompt-sync')();

const number1 = Number(prompt('Press 1 to combine press 2 to deconstruct: '))


if (number1 === 1) {
    console.log("now we'll combine 2 colors!");
    const color1 = prompt('choose a color: ');
    console.log(color1);
    const color2 = prompt('choose another color: ');
    console.log(color2);
    if ((color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red')){
        console.log('purple');
    }
    if ((color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red')){
        console.log('orange');
    }
    if ((color1 && 'blue' && color2 && 'yellow') || (color1 && 'yellow' && color2 && 'blue')){
        console.log('green');
    }
    else {
        console.log('error');
    }
    
}else if (number1 === 2) {
    console.log("now we'll deconstruct a color!");
    const color1 = prompt('choose a color');
    console.log(color1);
    const color2 = prompt('This color deconstructs into two colors');
    console.log(color2);
    if (color1 === 'purple') {
    console.log('red' , 'blue');
    }
    else if (color1 === 'orange') {
        console.log('red' , 'yellow');
    }
    else if (color1 === 'green') {
        console.log('blue' , 'yellow');
    }
    else  {
        console.log('error');
    }
}
