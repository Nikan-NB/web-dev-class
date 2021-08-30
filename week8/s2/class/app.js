function game(){
    var humanw =0
    var pcw =0
    var games = parseInt(prompt('how many times do you want to play?'))
    var items = ['r', 'p', 's'];
    for (let i = 0; i < games; i++){
        var human = prompt('select between r or p or s');
        var pc = items[Math.floor(Math.random() *3)];

        console.log('human:' , human);
        console.log('pc:' , pc);

        if((human == 'r' && pc == 's') || (human == 'p' && pc == 'r') || (human == 's' && pc == 'p')){
            alert('human wins this round')
            humanw++
        }else if ((pc == 'r' && human == 's') || (pc == 'p' && human == 'r') || (pc == 's' && human == 'p')){
            alert('pc wins this round')
            pcw++
        }else if(human == pc){
            alert('draw')
        }else{
            alert('wrong input')
        }
    }    
    if(humanw > pcw){
        alert('human wins '+'                      human:'+ humanw + '                      pc:' + pcw )
        
    }else if(pcw > humanw){
        alert('pc wins '+ '                      human:' + humanw + '                      pc:' + pcw )
    }else if(humanw == pcw){
        alert('draw')
    }
}

game();