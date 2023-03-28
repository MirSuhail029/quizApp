const card = document.getElementById("card-contents");
const cardButton = document.getElementById("q1");
const stat = document.getElementById("stat");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const question = document.getElementById("question");
const summary = document.getElementById("summary");
const summaryStats = document.querySelectorAll("#summaryStats :nth-child(odd)");
const summaryMessage = document.querySelectorAll(
  "#summaryMessage :nth-child(odd)"
);

let option, optionRadio;
for (let i = 1; i <= 4; i++) {
  option = `option${i}`;
  optionRadio = `${option}Radio`;
  option = document.getElementById(option);
  optionRadio = document.getElementById("optionRadio");
}

// object containing all questions data
const questions = {
  question1: {
    ques: "The word processing feature that catches most random typographical errors and misspellings is known as?",
    opt1: "Grammar Checker",
    opt2: "Spell Checker",
    opt3: "Word Checker",
    opt4: "None of the these",
    answer: "Spell Checker",
  },
  question2: {
    ques: "The assets that can be easily converted into cash within a short period i.e., 1 year or less is known as?",
    opt1: "Current Assets",
    opt2: "Fixed assets",
    opt3: "Intangible assets",
    opt4: "Investments",
    answer: "Current Assets",
  },
  question3: {
    ques: "First time when the operating system is loading into main memory and peripheral devices are checked called?",
    opt1: "Freeze booting",
    opt2: "Hot booting",
    opt3: "Warm booting",
    opt4: "Cold booting",
    answer: "Cold booting",
  },
  question4: {
    ques: "The memory resident portion of the operating system is called?",
    opt1: "API",
    opt2: "CMOS",
    opt3: "Register",
    opt4: "Kernel",
    answer: "Kernel",
  },
  question5: {
    ques: "Public Financial Management System was previously known as ?",
    opt1: "API",
    opt2: "CMOS",
    opt3: "Register",
    opt4: "Kernel",
    answer: "Kernel",
  },
};
// converting the questions object into a map
const questionsMap = new Map(Object.entries(questions));
// storing all the keys of individual questions in an array
// const qNumberArray = [];
// for (const [key] of questionsMap) {
//   qNumberArray.push(key);
// }
// storing all the keys in a set to keep track of key availability
const qNumberSet = new Set();
for (const [key] of questionsMap) {
  qNumberSet.add(key);
}
// const qNumberSet = new Set(qNumberArray);

// selecting a random question from the set and removing it after selection
let random;
const setSize = qNumberSet.size;
const generateQuestionPointer = function () {
  let selector;
  if (qNumberSet.size !== 0) {
    while (true) {
      random = Math.ceil(Math.random() * setSize);
      selector = `question${random}`;
      if (qNumberSet.has(selector)) {
        qNumberSet.delete(selector);
        break;
      }
    }
  }
  return selector;
};
// using the randomly selected question reference to acquiring the data for that question from the question map
// updating the dom nodes to display the question data acquired from the question map
let flag = false;
let qP;
let answer;
const generateQuestion = function () {
  nextButton.setAttribute("disabled", "true");
  cardButton.removeAttribute("disabled");
  flag = false;
  qP = questionsMap.get(generateQuestionPointer());
  if (qP !== undefined) {
    answer = qP.answer;
    question.textContent = qP.ques;
    option1.textContent = qP.opt1;
    option2.textContent = qP.opt2;
    option3.textContent = qP.opt3;
    option4.textContent = qP.opt4;
    option1Radio.checked = false;
    option2Radio.checked = false;
    option3Radio.checked = false;
    option4Radio.checked = false;
    option1Radio.setAttribute("value", qP.opt1);
    option2Radio.setAttribute("value", qP.opt2);
    option3Radio.setAttribute("value", qP.opt3);
    option4Radio.setAttribute("value", qP.opt4);
    option1Radio.setAttribute("title", qP.opt1);
    option2Radio.setAttribute("title", qP.opt2);
    option3Radio.setAttribute("title", qP.opt3);
    option4Radio.setAttribute("title", qP.opt4);
    card.setAttribute("class", "card-contents");
    stat.textContent = "Good Luck";
  }
};
generateQuestion();
nextButton.addEventListener("click", generateQuestion);

// function for generating the final score and displaying it onto the screen
let finalScore = 0;
const [correct, total, score] = summaryStats;
const [alert, conclusion] = summaryMessage;
const summaryFunction = function () {
  const grade = finalScore / setSize >= 0.4;
  card.setAttribute("class", "hidden");
  summary.removeAttribute("class");
  correct.textContent = `Correct Answers: ${finalScore}`;
  total.textContent = `Total Questions: ${setSize}`;
  score.textContent = `Score ${finalScore}/${setSize}`;
  alert.textContent = grade ? "Congratulations!!!" : "Sorry!!!";
  conclusion.textContent = grade
    ? "You passed the test"
    : "You failed the test";
};
finishButton.addEventListener("click", summaryFunction);
// take the user input and check whether the response is correct or incorrect or if the response has been provided or not
// also update the score and display the final score
let statMessage;
let counter = 0;
const ques = function (actualAnswer) {
  const choices = document.getElementsByClassName("choice");
  for (const selected of choices) {
    if (selected.checked === true) {
      flag = true;
      const result = selected.value === actualAnswer ? "correct" : "incorrect";
      statMessage = `${selected.value} is ${result}`;
      cardButton.setAttribute("disabled", "true");
      if (result === "correct") {
        card.setAttribute("class", "correct");
        stat.textContent = statMessage;
        finalScore++;
      } else if (result === "incorrect") {
        card.setAttribute("class", "incorrect");
        stat.textContent = statMessage;
      }
      counter++;
      if (counter < setSize) {
        nextButton.removeAttribute("disabled");
      } else if (counter == setSize) {
        nextButton.setAttribute("class", "hidden");
        finishButton.removeAttribute("disabled");
        finishButton.removeAttribute("class");
      }
    }
  }
  if (!flag) {
    stat.textContent = "Please select an option";
  }
};

cardButton.addEventListener("click", function () {
  ques(answer);
});
