let x=Number(prompt("Enter number 1:"));
let y=Number(prompt("Enter number 2"));

function sum(number1,number2){
    document.write(`<p>${number1} + ${number2} = ${number1 + number2}</p>`);
}

function sub(number1,number2){
    document.write(`<p>${number1} - ${number2} = ${number1 - number2}</p>`);
}
function mult(number1,number2){
    document.write(`<p>${number1} * ${number2} = ${number1 * number2}</p>`);

}
function div(number1,number2){
    document.write(`<p>${number1} / ${number2} = ${number1 / number2}</p>`);

}
mult(x,y);
div(x,y);
sum(x,y);
sub(x,y);