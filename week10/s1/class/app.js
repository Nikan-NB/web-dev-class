const image = document.getElementById('sliderimage');
const pre = document.getElementById('pre');
const next = document.getElementById('next');

let imageNum = 3;

pre.addEventListener('click', function() {

    if(imageNum == 0) {
        imageNum = 3;
        image.src = 'image/' + imageNum + '.jpg';
    }else {
        image.src = 'image/' + imageNum + '.jpg';
        imageNum--;
    }
})

next.addEventListener('click', function() {
    if(imageNum == 4) {
        imageNum = 1;
        image.src = 'image/' + imageNum + '.jpg';
    }else {
        image.src = 'image/' + imageNum + '.jpg';
        imageNum++;
    } 
})
