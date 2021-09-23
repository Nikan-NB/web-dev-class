const spacing = document.getElementById('spacing');
const blur = document.getElementById('blur');
const base = document.getElementById('base');
const image = document.getElementById('img');

spacing.addEventListener('input' , function(e){
    // const spac = e.target.value;
    // console.log(spac);
    // image.style.borderWidth = spac + 'px';
    image.style.borderWidth = `${e.target.value}px`;
})

blur.addEventListener('input' , function(e){
    // image.style.filter = 'blur(' + e.target.value + 'px)'
    image.style.filter = `blur(${e.target.value}px)`
})
base.addEventListener('input' , function(e){
    image.style.borderColor = e.target.value
})