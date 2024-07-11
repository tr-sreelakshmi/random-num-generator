//RANDOM NUMBER GENERATOR

const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('myLabel1');
const myLabel2= document.getElementById('myLabel2');
const min =1;
const max =6;
let randomNum1 ;
let randomNum2 ;

myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
myLabel1.textContent = randomNum1;
myLabel2.textContent = randomNum2;
}