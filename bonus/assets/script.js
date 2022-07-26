
const UL_PADRE = document.querySelector('#padre_item');
const PREV = document.querySelector('#but_prev');
const NEXT = document.querySelector('#but_next');
const SELECTS = document.querySelector('#selects');

const LINKS_IMG = [];
const ELEMENTS_DOM = [];
const BUTTON_ELEMENTI = [];

for (let i = 1; i <= 5; i++) {
    LINKS_IMG.push(`./assets/img/0${i}.jpg`);
}

for (let i = 0; i < LINKS_IMG.length; i++) {
    const li = document.createElement('li');
    li.className = 'item';
    if(i === 0){
        li.classList.add('active');
    }
    const img = document.createElement('img');
    img.className = 'img-fluid';
    img.src = LINKS_IMG[i];
    li.append(img);
    ELEMENTS_DOM.push(li);
    UL_PADRE.append(li);

    const button = document.createElement('button');
    // button.textContent = i + 1;
    button.className = 'selector_img';
    button.setAttribute('num', i);
    if(i === 0){
        button.classList.add('active_img');
    }
    BUTTON_ELEMENTI.push(button);
    SELECTS.append(button);
}

let index = 0;

for (let i = 0; i < BUTTON_ELEMENTI.length; i++) {
    BUTTON_ELEMENTI[i].addEventListener('click', ()=>{
        index = parseInt(BUTTON_ELEMENTI[i].getAttribute('num'));
        for (let f = 0; f < ELEMENTS_DOM.length; f++) {
            ELEMENTS_DOM[f].classList.remove('active');
            BUTTON_ELEMENTI[f].classList.remove('active_img');
        }
        ELEMENTS_DOM[index].classList.add('active');
        BUTTON_ELEMENTI[index].classList.add('active_img');
    });
}

PREV.addEventListener('click', ()=>{
    if(index > 0){
        ELEMENTS_DOM[index].classList.remove('active');
        BUTTON_ELEMENTI[index].classList.remove('active_img');
        ELEMENTS_DOM[index - 1].classList.add('active');
        BUTTON_ELEMENTI[index - 1].classList.add('active_img');
        index--;
    }else {
        BUTTON_ELEMENTI[0].classList.remove('active_img');
        ELEMENTS_DOM[0].classList.remove('active');
        BUTTON_ELEMENTI[ELEMENTS_DOM.length - 1].classList.add('active_img');
        ELEMENTS_DOM[ELEMENTS_DOM.length - 1].classList.add('active');
        index = ELEMENTS_DOM.length - 1;
    }
});

NEXT.addEventListener('click', ()=>{
    if(index < ELEMENTS_DOM.length - 1){
        ELEMENTS_DOM[index].classList.remove('active');
        BUTTON_ELEMENTI[index].classList.remove('active_img');
        ELEMENTS_DOM[index + 1].classList.add('active');
        BUTTON_ELEMENTI[index + 1].classList.add('active_img');
        index++;
    }else {
        ELEMENTS_DOM[ELEMENTS_DOM.length - 1].classList.remove('active');
        BUTTON_ELEMENTI[ELEMENTS_DOM.length - 1].classList.remove('active_img');
        ELEMENTS_DOM[0].classList.add('active');
        BUTTON_ELEMENTI[0].classList.add('active_img');
        index = 0;
    }
});