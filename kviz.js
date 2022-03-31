// je potreba vytvorit objekt:

// * objekt obsahuje otazku
// * obrazek k otazce
// * pole moznych odpovedi - a index spravne odpovedi

firstQuestion = {
    question: 'Co je ikoncika hracka z 80.let?',
    picture: 'obrazky/moncicak.jpg',
    answers: ['Kocicak','Moncicak','Opicak'],
    index: 1
};

let stranka = document.createElement('div');
stranka.className = 'kviz';
let body = document.querySelector('body');
body.appendChild(stranka);
let obsah = document.createElement('div');
obsah.className = 'obsah';
stranka.appendChild(obsah);
let fotka = document.createElement('div');
fotka.className = 'foto';
obsah.appendChild(fotka);
let obrazek = document.createElement('img');
obrazek.id = 'obrazek';
obrazek.src = firstQuestion.picture;
fotka.appendChild(obrazek);


