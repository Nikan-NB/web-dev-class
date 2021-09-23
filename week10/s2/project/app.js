const input = document.getElementById('input');
const k = document.getElementById('kilo');
const g = document.getElementById('gram');
const o = document.getElementById('ounce');

input.addEventListener('input' , function(){
    const inp = parseFloat(input.value);
    const ki = inp / 2.205 ;
    const gr = inp * 454 ;
    const on = inp * 16 ;
    k.innerHTML = 'Kilograms:' + ki ;
    g.innerHTML = 'Grams:' + gr ;
    o.innerHTML = 'Ounces' + on ;
})
