var clock1 = document.getElementById('clock1')

function goClock1() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    clock1.innerHTML = hour + ':' + minute + ':' + second;
}

setInterval(goClock1, 1000);


// clock2
var clock2 = document.getElementById('clock2')

function goClock2() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var ampm = '';
    if(hour >= 12) {
        ampm = 'PM'   
    } else {
        ampm ='AM'
    }
    if(hour > 12) {
        hour = hour-12;
    }

    clock2.innerHTML = hour + ':' + minute + ampm;
}

setInterval(goClock2, 1000);

// set event

var button1 = document.getElementsByTagName('button')[0];
button1.addEventListener('click',function() {
    if (clock1.style.visibility === 'visible'){
        clock1.style.visibility = 'hidden'
    } else {
        clock1.style.visibility = 'visible'
    }
})

var button2 = document.getElementsByTagName('button')[1];
button2.addEventListener('dblclick',function() {
    if (clock2.style.visibility === 'visible'){
        clock2.style.visibility = 'hidden'
    } else {
        clock2.style.visibility = 'visible'
    }
})