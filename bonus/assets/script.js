
// prendiamo dal dom l'elemento per far inserire gli item
const UL_PADRE = document.querySelector('#padre_item');
const PREV = document.querySelector('#but_prev');
const NEXT = document.querySelector('#but_next');

const links_img = [];
let ELEMENTS_DOM = [];

for (let i = 1; i <= 5; i++) {
    links_img.push(`./assets/img/0${i}.jpg`);
}

for (let i = 0; i < links_img.length; i++) {
    const li = document.createElement('li');
    li.className = 'item';
    if(i === 0){
        li.classList.add('active');
    }
    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = links_img[i];
    li.append(img);
    ELEMENTS_DOM.push(li);
    UL_PADRE.append(li);
}

let index = 0;

PREV.addEventListener('click', ()=>{
    if(index > 0){
        ELEMENTS_DOM[index].classList.remove('active');
        ELEMENTS_DOM[index - 1].classList.add('active');
        index--;
    }else {
        ELEMENTS_DOM[0].classList.remove('active');
        ELEMENTS_DOM[ELEMENTS_DOM.length - 1].classList.add('active');
        index = ELEMENTS_DOM.length - 1;
    }
});

NEXT.addEventListener('click', ()=>{
    if(index < ELEMENTS_DOM.length - 1){
        ELEMENTS_DOM[index].classList.remove('active');
        ELEMENTS_DOM[index + 1].classList.add('active');
        index++;
    }else {
        ELEMENTS_DOM[ELEMENTS_DOM.length - 1].classList.remove('active');
        ELEMENTS_DOM[0].classList.add('active');
        index = 0;
    }
});