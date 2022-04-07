// je potreba vytvorit objekt:

// * objekt obsahuje otazku
// * obrazek k otazce
// * pole moznych odpovedi - a index spravne odpovedi

firstQuestion = {
    question: 'Co je ikonická hračka z 80.let?',
    picture: 'obrazky/moncicak.jpg',
    answers: ['Kočičák','Mončičák','Opičák'],
    index: 1
};

secondQuestion = {
    question: 'Jaké je Matějovo nejoblíbenější ovoce?',
    picture: 'obrazky/ovoce.jpg',
    answers: ['Kokos','Melounek','Jahoda','Ani jedna z možností'],
    index: 1
};

thirdQuestion = {
    question: 'Pro úspěšné absolvování kurzu je potřeba...',
    picture: 'obrazky/pivo.jpg',
    answers: ['Umět JavaScript','Chodit po kurzu do hospody'],
    index: 0
};

pole = [firstQuestion,secondQuestion,thirdQuestion];

x = -1;
y = -1;

function pageContent(){
    x = x + 1;
    
    let page = document.createElement('div');
    page.className = 'kviz';

    let body = document.querySelector('body');
    body.appendChild(page);

    let questionCount = document.createElement('div');
    questionCount.id = 'poradi';
    page.appendChild(questionCount);

    questionInformation = document.createElement('h2');
    questionInformation.innerHTML = 'Otázka ' + (x + 1) + ' / ' + '3';
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

function  removeContent(){
    let parent = document.querySelector('body');
    let child  = document.querySelector('.kviz');
    parent.removeChild(child);

   if ((x+1) === pole.length){
       let body = document.querySelector('body');
       let lastPage = document.createElement('div');
       lastPage.className = 'vysledek';
       body.appendChild(lastPage);
       document.querySelector('.vysledek').style.display = 'block';
       let header = document.createElement('h2');
       header.innerHTML = 'Tvoje hodnocení';
       lastPage.appendChild(header);


       for (let b = 0; b < pole.length;b++){
           y = y + 1;
           let questions = document.createElement('h3');
           let yourAnswer = document.createElement('span');
           questions.innerHTML = b + 1  + '. ' + pole[y].question;
           yourAnswer.innerHTML = 'Tvoje odpověď: ';
           lastPage.appendChild(questions);
           lastPage.appendChild(yourAnswer);
       }
       

   }else{
    pageContent();

   }
   
}



// je potreba zajistit:
// na posledni strance vyresit odchyceni, ktera odpoved byla vybrana 
// porovnat ji se spravnou odpovedi 
// vypocitat uspesnost