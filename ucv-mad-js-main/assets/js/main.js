/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    console.log("Hello, world!");
    console.log(Math.random());



const miReloj = document.getElementById('clock');


console.dir(miReloj);


miReloj.innerText = "Hola,hola!";

const headers = document.getElementsByTagName('h1');

console.dir(headers[0]);

const divs = document.getElementsByTagName('div');

console.dir(divs);

}


function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function changeEmojiColor(elem){
    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    elem.style.fill = 'rgb(' + r + ',' + g +',' + b +')';
}