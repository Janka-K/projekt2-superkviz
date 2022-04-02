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


pole = [firstQuestion,secondQuestion];




function prvniStranka(){
    let page = document.createElement('div');
    page.className = 'kviz';

    let body = document.querySelector('body');
    body.appendChild(page);

    let questionCount = document.createElement('div');
    questionCount.id = 'poradi';
    page.appendChild(questionCount);

    questionInformation = document.createElement('h2');
    questionInformation.innerHTML = 'Otazka ' + firstQuestion.index + ' / ' + '3';
    questionCount.appendChild(questionInformation);

    let question = document.createElement('div');
    question.id = 'otazka';
    page.appendChild(question);

    let questionContent = document.createElement('h3');
    questionContent.innerHTML = firstQuestion.question;
    question.appendChild(questionContent);

    let content = document.createElement('div');
    content.className = 'obsah';
    page.appendChild(content);
    let fotka = document.createElement('div');
    fotka.className = 'foto';
    content.appendChild(fotka);

    let picture = document.createElement('img');
    picture.id = 'obrazek';
    picture.src = firstQuestion.picture;
    fotka.appendChild(picture);

    let list = document.createElement('div');
    list.id = 'moznosti';
    content.appendChild(list);

    let listItems = document.createElement('ul');
    listItems.id = 'odpovedi';
    list.appendChild(listItems);


    for(let i = 0; i < firstQuestion.answers.length; i++){
        let innerQuestion = document.createElement('li');
        innerQuestion.innerHTML = firstQuestion.answers[i];
        listItems.appendChild(innerQuestion);
    }
 
}


function  odstran(){
    let rodic = document.querySelector('.kviz');
    let potomek1 = document.querySelector ('#poradi');
    let potomek2 = document.querySelector ('#otazka');
    let potomek3 = document.querySelector ('.obsah');
    rodic.removeChild (potomek1);
    rodic.removeChild (potomek2);
    rodic.removeChild (potomek3);
}