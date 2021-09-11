const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
 
let time = 0;
let interval;

function goTimer() {
    time++;
    timer.innerHTML = time;
}

start.addEventListener('click',function() {
    interval = setInterval(goTimer,1000)
})

stop.addEventListener('click' , function() {
    clearInterval(interval);
})

reset.addEventListener('click' , function() {
    clearInterval(interval);
    time = 0;
    timer.innerHTML = 0;
})