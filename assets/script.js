
// salviamo tutti gli elementi dentro alle variabili costanti
const DOM_UL_FATHER = document.querySelector('#padre_item');
const DOM_BUTTON_PREV = document.querySelector('#but_prev');
const DOM_BUTTON_NEXT = document.querySelector('#but_next');

// creiamo delle array per salvataggio degli elementi da creare
let DOM_LI_ELEMENTS_CREATED = [];

// assegnamo la quantità di elementi da creare
const NUM_IMG_FOR_INSERT = 5;

// creaiamo una variabile di tipo number per usarlo come indice che cambiera sempre
let index_img = 0;


// un for per la creazione del layout
for (let i = 0; i < NUM_IMG_FOR_INSERT; i++) {

    // creaiamo un elemento di tipo <li></li>
    const _li_create = document.createElement('li');
    // creaiamo un elemento di tipo <img>
    const _img_create = document.createElement('img');

    // assegnamo classi di partenza agli elementi
    _li_create.className = 'item';
    _img_create.className = 'img-fluid';

    // assegnamo ai primi elementi creati le classi per l'attivazione
    if (i === 0) {
        _li_create.classList.add('active');
    }

    // assegnamo alla <img> creata al src il link da prender l'immagine
    _img_create.src = `./assets/img/0${i+1}.jpg`;

    // pushamo dentro a una array per tenerla salvata
    DOM_LI_ELEMENTS_CREATED.push(_li_create);

    // appendiamo agli elementi nel DOM
    _li_create.append(_img_create);
    DOM_UL_FATHER.append(_li_create);
}


// al click del pulsante precedente
DOM_BUTTON_PREV.addEventListener('click', () => {
    // se index_img e maggiore del valore 0
    if (index_img > 0) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');

        // aggiungi le classi per l'attivazione a quella precedente
        DOM_LI_ELEMENTS_CREATED[index_img - 1].classList.add('active');

        // incrementiamo in meno di 1 l'index_img
        index_img--;
    }
});


// al click del pulsante prossegui
DOM_BUTTON_NEXT.addEventListener('click', () => {
    // se index_img e minore del valore della lunghezza del array - 1
    if (index_img < DOM_LI_ELEMENTS_CREATED.length - 1) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');

        // aggiungi le classi per l'attivazione a quella che prossegue
        DOM_LI_ELEMENTS_CREATED[index_img + 1].classList.add('active');

        // incrementiamo in più di 1 l'index_img
        index_img++;
    }
});