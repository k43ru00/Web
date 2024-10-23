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


function a1 (elem) {
    document.getElementById("adormir").style.fill = "black";
}

function a2 (elem) {
    document.getElementById("adormir").style.fill = "green";
}
    function a3(elem){
    document.getElementById("adormir").innerHTML = "hola";
}






function hover(elem){
    document.getElementById("gay").style.fill = "black";
}

function xd (elem){
    document.getElementById("gay").style.fill = "grey";
}
function xdd(elem){
    document.getElementById("gay").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/> </svg>';
}



function b1 (elem) {
    document.getElementById("hola").style.fill = "black";
}
    
function b2 (elem) {
    document.getElementById("hola").style.fill = "pink";
}
    
    
function changeImage(elem){

    const miVar = document.getElementsByTagName("main"); 
    miVar[0].style.backgroundImage = "url('./assets/img/moonlit-lake.jpg')";

}






