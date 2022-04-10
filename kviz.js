// je potreba vytvorit objekt:

// * objekt obsahuje otazku
// * obrazek k otazce
// * pole moznych odpovedi - a index spravne odpovedi

let firstQuestion = {
  question: "Co je ikonická hračka z 80.let?",
  picture: "obrazky/moncicak.jpg",
  answers: ["Kočičák", "Mončičák", "Opičák"],
  index: 1,
};

let secondQuestion = {
  question: "Jaké je Matějovo nejoblíbenější ovoce?",
  picture: "obrazky/ovoce.jpg",
  answers: ["Kokos", "Melounek", "Jahoda", "Ani jedna z možností"],
  index: 1,
};

let thirdQuestion = {
  question: "Pro úspěšné absolvování kurzu je potřeba...",
  picture: "obrazky/pivo.jpg",
  answers: ["Umět JavaScript", "Chodit po kurzu do hospody"],
  index: 0,
};

let pole = [firstQuestion, secondQuestion, thirdQuestion];

let clickedAnswers = [];
counter = 0;

x = -1;
y = -1;

document.querySelector("body").addEventListener("load", pageContent());

function pageContent() {
  x = x + 1;

  let page = document.createElement("div");
  page.className = "kviz";

  let body = document.querySelector("body");
  body.appendChild(page);

  let questionCount = document.createElement("div");
  questionCount.id = "poradi";
  page.appendChild(questionCount);

  let questionInformation = document.createElement("h2");
  questionInformation.innerHTML = "Otázka " + (x + 1) + " / " + pole.length;
  questionCount.appendChild(questionInformation);

  let question = document.createElement("div");
  question.id = "otazka";
  page.appendChild(question);

  let questionContent = document.createElement("h3");
  questionContent.innerHTML = pole[x].question;
  question.appendChild(questionContent);

  let content = document.createElement("div");
  content.className = "obsah";
  page.appendChild(content);

  let photo = document.createElement("div");
  photo.className = "foto";
  content.appendChild(photo);

  let picture = document.createElement("img");
  picture.id = "obrazek";
  picture.src = pole[x].picture;
  photo.appendChild(picture);

  let list = document.createElement("div");
  list.id = "moznosti";
  content.appendChild(list);

  let listItems = document.createElement("ul");
  listItems.id = "odpovedi";
  list.appendChild(listItems);

  for (let i = 0; i < pole[x].answers.length; i++) {
    let innerQuestion = document.createElement("li");
    innerQuestion.innerHTML = pole[x].answers[i];
    innerQuestion.dataset.item = i;
    listItems.appendChild(innerQuestion);
  }

  let answersList = document.querySelectorAll("#odpovedi li");
  let data = Array.from(answersList, (answer) => answer.dataset.item);

  for (let i = 0; i < answersList.length; i++) {
    answersList[i].addEventListener("click", function () {
      clickedAnswers.push(Number(data[i]));
      moveContent();
    });
  }
}

function moveContent() {
  let parent = document.querySelector("body");
  let child = document.querySelector(".kviz");
  parent.removeChild(child);

  if (x + 1 === pole.length) {
    let body = document.querySelector("body");
    let lastPage = document.createElement("div");
    lastPage.className = "vysledek";
    body.appendChild(lastPage);
    document.querySelector(".vysledek").style.display = "block";
    let header = document.createElement("h2");
    header.innerHTML = "Tvoje hodnocení";
    lastPage.appendChild(header);

    for (let b = 0; b < pole.length; b++) {
      y = y + 1;
      let questions = document.createElement("h3");
      let yourAnswer = document.createElement("p");
      questions.innerHTML = b + 1 + ". " + pole[y].question;
      yourAnswer.innerHTML =
        "Tvoje odpověď: " + pole[y].answers[clickedAnswers[b]];
      lastPage.appendChild(questions);
      lastPage.appendChild(yourAnswer);
      let correctAnswer = document.createElement("p");

      if (pole[y].index === clickedAnswers[b]) {
        correctAnswer.innerHTML = "To je SPRÁVNĚ";
        counter++;
      } else {
        correctAnswer.innerHTML =
          "Správná odpověď: " + pole[y].answers[pole[y].index];
      }
      lastPage.appendChild(correctAnswer);
    }

    let footer = document.createElement("h2");
    footer.innerHTML =
      "Správně " +
      counter +
      " ze " +
      pole.length +
      " otázek. Úspěšnost " +
      Math.round((counter / pole.length) * 100) +
      " %.";
    lastPage.appendChild(footer);
  } else {
    pageContent();
  }
}
