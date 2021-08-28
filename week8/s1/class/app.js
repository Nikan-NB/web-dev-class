var start = true

while(start){
    var num1 = parseInt(prompt('type your number'));
    var num2 = num1 % 2 ;
    if(num2 == 0){
        alert('zoj');
        start = false;
    } else if(num2 == 1){
        alert('fard');
        start = false;
    }else{
        alert('please type a number');
    }
}

function add(num1,num2){
    return num1 + num2;
}

var number = add(10,15);
console.log(number)