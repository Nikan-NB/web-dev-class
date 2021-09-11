var clock = document.getElementById('clock')
var button = document.getElementsByTagName('button');
console.log(clock);
console.log(button);
function goClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    clock.innerHTML = hour + ':' + minute + ':' + second;
}

setInterval(goClock, 1000);