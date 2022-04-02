// je potreba vytvorit objekt:

// * objekt obsahuje otazku
// * obrazek k otazce
// * pole moznych odpovedi - a index spravne odpovedi

firstQuestion = {
    question: 'Co je ikonicka hracka z 80.let?',
    picture: 'obrazky/moncicak.jpg',
    answers: ['Kocicak','Moncicak','Opicak'],
    index: 1
};

secondQuestion = {
    question: 'Jake je Matejovo nejoblibenejsi ovoce ?',
    picture: 'obrazky/ovoce.jpg',
    answers: ['Kokos','Melounek','Jahoda','Ani jedna z moznosti'],
    index: 1
};

thirdQuestion = {
    question: 'Pro uspesne absolvovani kurzu je potreba... ',
    picture: 'obrazky/pivo.jpg',
    answers: ['Umet JavaScript','Chodit po kurzu do hospody'],
    index: 0
};

pole = [firstQuestion,secondQuestion,thirdQuestion];

x = -1;

function prvniStranka(){
    x = x + 1;
    
    let page = document.createElement('div');
    page.className = 'kviz';

    let body = document.querySelector('body');
    body.appendChild(page);

    let questionCount = document.createElement('div');
    questionCount.id = 'poradi';
    page.appendChild(questionCount);

    questionInformation = document.createElement('h2');
    questionInformation.innerHTML = 'Otazka ' + (x + 1) + ' / ' + '3';
    questionCount.appendChild(questionInformation);

    let question = document.createElement('div');
    question.id = 'otazka';
    page.appendChild(question);

    let questionContent = document.createElement('h3');
    questionContent.innerHTML = pole[x].question;
    question.appendChild(questionContent);

    let content = document.createElement('div');
    content.className = 'obsah';
    page.appendChild(content);
    let fotka = document.createElement('div');
    fotka.className = 'foto';
    content.appendChild(fotka);

    let picture = document.createElement('img');
    picture.id = 'obrazek';
    picture.src = pole[x].picture;
    fotka.appendChild(picture);

    let list = document.createElement('div');
    list.id = 'moznosti';
    content.appendChild(list);

    let listItems = document.createElement('ul');
    listItems.id = 'odpovedi';
    list.appendChild(listItems);


    for(let i = 0; i < pole[x].answers.length; i++){
        let innerQuestion = document.createElement('li');
        innerQuestion.innerHTML = pole[x].answers[i];
        listItems.appendChild(innerQuestion);
    }
}


function  odstran(){
    let rodic = document.querySelector('body');
    let potomek1 = document.querySelector('.kviz');
   rodic.removeChild(potomek1);
   prvniStranka();

}

// je potreba zajistit:
// posledni stranku s vyhodnocenim vysledku