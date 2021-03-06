const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
 
let milisecond = 0;
let second = 0;
let interval;
let minut = 0;
let hour = 0;
function goTimer() {
        milisecond++;
        timer.innerHTML = milisecond;
        if(milisecond == 100){
            second++;
            milisecond = 0;
        }
        if(second == 60){
            minut++;
            second = 0;
        }
        if(minut == 60){
            hour++;
            hour = 0;
        }
        timer.innerHTML = hour + ':' + minut + ':' + second + ':' + milisecond ;
}

start.addEventListener('click',function() {
    interval = setInterval(goTimer,10);
    start.style.display = 'none'
})

stop.addEventListener('click' , function() {
    clearInterval(interval);
    start.style.display = 'block'
})

reset.addEventListener('click' , function() {
    clearInterval(interval);
    start.style.display = 'block'
    milisecond = 0;
    minut = 0;
    second = 0;
    timer.innerHTML = 0;
    seconds.innerHTML = 0;
})