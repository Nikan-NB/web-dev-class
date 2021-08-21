var num1 = parseInt(prompt('Add your first number:'));
var num2 = parseInt(prompt('Add yuor second number'));

var oper = prompt('select your oper')

// if(oper == 'add'){
//     alert(num1 + num2);
// } else if (oper == 'sub'){
//     alert(num1 - num2);
// } else if (oper == 'div'){
//     alert(num1 / num2);
// } else if (oper == 'mul'){
//     alert(num1 * num2);
// } else {
//     alert('change your oper')
// }

switch(oper) {
    case 'add':
        alert(num1 + num2);
        break;
    case 'sub':
        alert(num1 + num2);
        break;
    case 'div':
        alert(num1 + num2);
        break;
    case 'mul':
        alert(num1 + num2);
        break;
    default:
        alert('change your oper');
}