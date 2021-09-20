const kiloinput = document.getElementById('kilo');
const graminput = document.getElementById('gram');
const poundinput = document.getElementById('pound');

poundinput.addEventListener('input',function(){
    const pw = parseFloat(poundinput.value);
    const kw = pw / 2.205;
    const gw = pw * 454;

    kiloinput.value = kw;
    graminput.value = gw;
})
