
// prendiamo dal dom l'elemento per far inserire gli item
const UL_PADRE = document.querySelector('#padre_item');

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
console.log(ELEMENTS_DOM);