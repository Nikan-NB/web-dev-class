const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const minutes = document.getElementById('minute');
 
let time = 0;
let interval;
let minut = 0;
function goTimer() {
        time++;
        timer.innerHTML = time;
        console.log(time);
        if(time == 60){
            minut++;
            minutes.innerHTML = minut;
            time = 0
            console.log(minut);
        }
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
    minut = 0;
    timer.innerHTML = 0;
    minutes.innerHTML = 0;
})