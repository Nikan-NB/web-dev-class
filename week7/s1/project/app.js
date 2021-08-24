var num1 = parseInt(prompt('select num1'));
var num2 = parseInt(prompt('select num2'));
var num3 = parseInt(prompt('select num3'));
var average = (num1 + num2 + num3) /3;
if( average < 10 ){
    alert('fail')
}else if( average => 10 ){
    alert('pass')
}
