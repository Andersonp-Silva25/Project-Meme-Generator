const body = document.body;
const memeContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const noneBorder = document.getElementById('none-border');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function createElements() {    
    let memeText = document.createElement('p');
    memeText.id = 'meme-text';
    memeContainer.appendChild(memeText);

    let memeImage = document.createElement('img');
    memeImage.id = 'meme-image';
    memeImage.setAttribute('src', './imgs/default.png');
    memeContainer.appendChild(memeImage);
}

function screenText() {
    memeText.innerText = textInput.value;
}

function changeBorder(event) {
    if (event.target.id === 'fire'){
        memeContainer.style.border = 'rgb(255, 0, 0) dashed 3px';
    }else if (event.target.id === 'water'){
        memeContainer.style.border = 'rgb(0, 0, 255) double 5px';
    }else if (event.target.id === 'earth'){
        memeContainer.style.border = 'rgb(0, 128, 0) groove 6px';
    }else if (event.target.id === 'none-border'){
        memeContainer.style.border = 'black solid 1px';
    }
}

function defaultMemes (event) {
    if (event.target.id === 'meme-1'){
        imageMeme.setAttribute('src', event.target.src);
    }else if (event.target.id === 'meme-2'){
        imageMeme.setAttribute('src', event.target.src);
    }else if (event.target.id === 'meme-3'){
        imageMeme.setAttribute('src', event.target.src);
    }else if (event.target.id === 'meme-4'){
        imageMeme.setAttribute('src', event.target.src);
    }
}

function selectImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(event) {
            imageMeme.src = event.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}

createElements();

let memeText = document.getElementById('meme-text');
let textInput = document.getElementById('text-input');
let memeInsert = document.getElementById('meme-insert');
let imageMeme = document.getElementById('meme-image');

textInput.addEventListener('keyup', screenText);
fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);
noneBorder.addEventListener('click', changeBorder);
meme1.addEventListener('click', defaultMemes);
meme2.addEventListener('click', defaultMemes);
meme3.addEventListener('click', defaultMemes);
meme4.addEventListener('click', defaultMemes);
memeInsert.addEventListener('change', selectImage, false);






