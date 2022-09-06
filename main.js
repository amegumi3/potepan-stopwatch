"use strict"


const timer = document.getElementById("timer");
const start  = document.getElementById("start");
const stop  = document.getElementById("stop");
const reset  = document.getElementById("reset");

let msecs = 0; 
let seconds = 0;
let minutes = 0;
let hours = 0;



const stopwatch = function() {
    msecs ++;
    if (msecs % 10 === 0) {
        seconds ++;
        msecs = 0;
    }
    if (seconds % 60 === 0) {
        minutes ++;
        seconds = 0;
    }
    if ( minutes % 60 === 0) {
        hours ++;
        minutes = 0;
    }
    timer.textContent =  `${hours} : ${minutes} : ${seconds} : ${msecs}`;
}

let interval;

// スタートしたとき
start.addEventListener("click",function() {
    interval = setInterval(stopwatch,100);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}
);

// ストップしたとき
stop.addEventListener("click",function(){
    clearInterval(interval);
    stop.disabled = true;
    start.disabled = false;
    reset.disabled = false;

});

// リセットしたとき

reset.addEventListener("click",function() {
    timer.textContent = "0:0:0:0";
    start.disabled = false;
    stop.disabled = true;
    msecs = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
})