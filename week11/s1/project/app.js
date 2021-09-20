var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var reset = document.getElementById('reset');
var point = document.getElementById('point');
var win = document.getElementById('win');
var human = 0;
var pc = 0;

rock.addEventListener('click',function(){
    var game = Math.floor(Math.random()*4);
    if(game == 3){
        human++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Human wins!";
    }else if(game == 2){
        pc++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Pc wins!";
    }else if(game == 1){
        win.innerHTML = "Draw!";
    }
})
paper.addEventListener('click',function(){
    var game = Math.floor(Math.random()*4);
    if(game == 3){
        pc++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Pc wins!";
    }else if(game == 2){
        win.innerHTML = "Draw!";
    }else if(game == 1){
        human++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Human wins!";
    }
})
scissors.addEventListener('click',function(){
    var game = Math.floor(Math.random()*4);
    if(game == 3){
        win.innerHTML = "Draw!";
    }else if(game == 2){
        human++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Human wins!";
    }else if(game == 1){
        pc++;
        point.innerHTML = human + ":" + pc;
        win.innerHTML = "Pc wins!";
    }
})

reset.addEventListener('click',function(){
    pc = 0;
    human = 0;
    point.innerHTML = '0'+ ":" + '0'
})

