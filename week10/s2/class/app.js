const celsiusInput = document.getElementById('celsius');
const farenheitInput = document.getElementById('farenheit');
const kelvinInput = document.getElementById('kelvin');

celsiusInput.addEventListener('input',function(){
    const ctemp = parseFloat(celsiusInput.value);
    const ftemp = (ctemp * (5/9)) + 32;
    const ktemp = ctemp + 273;

    farenheitInput.value = ftemp;
    kelvinInput.value = ktemp;
})
farenheitInput.addEventListener('input',function(){
    console.log('f') 
})
kelvinInput.addEventListener('input',function(){
    console.log('k')
})

farenheitInput.addEventListener('input',function(){
    const ftemp = parseFloat(farenheitInput.value);
    const ctemp = (ftemp - 32 ) * 5/9;
    const ktemp = (ftemp - 32) * 5/9 + 273.15

    celsiusInput.value = ctemp;
    kelvinInput.value = ktemp;
})

kelvinInput.addEventListener('input',function(){
    const ktemp = parseFloat(kelvinInput.value);
    const ctemp = ktemp - 273.15 ;
    const ftemp =( ktemp - 273.15) * 9/5 + 32

    celsiusInput.value = ctemp;
    farenheitInput.value = ftemp ;
})