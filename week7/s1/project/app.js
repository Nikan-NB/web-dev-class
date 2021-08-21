var num1 = parseInt(prompt('select num1'));
var num2 = parseInt(prompt('select num2'));
var num3 = parseInt(prompt('select num3'));
var add = num1 + num2 + num3;
var answer = add / 3 ;
if( answer < 10 ){
    alert('fail')
}else if( answer => 10 ){
    alert('pass')
}
console.log(answer);