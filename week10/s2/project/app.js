const kiloinput = document.getElementById('kilo');
const graminput = document.getElementById('gram');
const poundinput = document.getElementById('pound');

kiloinput.addEventListener('input',function(){
    const kw = parseFloat(kiloinput.value);
    const gw = kw * 1000 ;
    const pw = kw * 2.205;

    graminput.value = gw;
    poundinput.value = pw;
})

graminput.addEventListener('input',function(){
    const gw = parseFloat(graminput.value);
    const kw = gw / 1000;
    const pw = gw / 454;

    kiloinput.value = kw;
    poundinput.value = pw;
})

poundinput.addEventListener('input',function(){
    const pw = parseFloat(poundinput.value);
    const kw = pw / 2.205;
    const gw = pw * 454;

    kiloinput.value = kw;
    graminput.value = gw ;
})