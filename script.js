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
    ques: "The bill for the Jammu and Kashmir Reorganisation Act, 2019 was introduced in Rajya Sabha by:",
    opt1: "Amit Shah",
    opt2: "G. Kishan Reddy",
    opt3: "Rajnath Singh",
    opt4: "Ravi Shankar Prasad",
    answer: "Amit Shah",
  },
  question6: {
    ques: "The Subar Dhar Mela takes place in which of the following locations of Jammu and Kashmir?",
    opt1: "Bhaderwah",
    opt2: "Kishtwar",
    opt3: "Srinagar",
    opt4: "Doda",
    answer: "Bhaderwah",
  },
  question7: {
    ques: "Which is the only active volcanic island in India?",
    opt1: "Minicoy Island",
    opt2: "Amindivi Island",
    opt3: "Barren Island",
    opt4: "Laccadive Island",
    answer: "Barren Island",
  },
  question8: {
    ques: "Which among the following is the largest wetland sanctuary in the state of Gujarat and one of the biggest in India?",
    opt1: "Kaziranga national park",
    opt2: "Nalsarovar Bird Sanctuary",
    opt3: "Sultanpur Bird Sanctuary",
    opt4: "Uppalapadu Bird Sanctuary",
    answer: "Nalsarovar Bird Sanctuary",
  },
  question9: {
    ques: "In which of the following states of India is the Dree festival celebrated?",
    opt1: "Manipur",
    opt2: "Assam",
    opt3: "Arunachal Pradesh",
    opt4: "Nagaland",
    answer: "Arunachal Pradesh",
  },
  question10: {
    ques: "During which season are walnuts harvested in Jammu and Kashmir?",
    opt1: "Winter",
    opt2: "Summer",
    opt3: "Autumn",
    opt4: "Monsoon",
    answer: "Autumn",
  },
  question11: {
    ques: "Operation Sadbhavana is an unique humane initiative undertaken in Jammu and Kashmir to help people affected by terrorism and is launched by the:",
    opt1: "Indian Army",
    opt2: "Central Government of India",
    opt3: "Home Department, Government of Jammu & Kashmir",
    opt4: "District Development Councils",
    answer: "Indian Army",
  },
  question12: {
    ques: "The Vale of Kashmir (Kashmir valley) is the sole producer of which product (in India)?",
    opt1: "Sapphire",
    opt2: "Walnut",
    opt3: "Saffron",
    opt4: "Peach",
    answer: "Saffron",
  },
  question13: {
    ques: "As per census 2011, with regards to sex ratio, the number of females per 1000 males in India was:",
    opt1: "890",
    opt2: "1140",
    opt3: "990",
    opt4: "940",
    answer: "940",
  },
  question14: {
    ques: "Read the following statements and choose the CORRECT option. Statement I: Wheat and Barley are grown as rabi crops in India. Statement II: Rabi crops are sown in the beginning of the monsoon season and harvested between October and December.",
    opt1: "Statement I: FALSE, Statement II: TRUE",
    opt2: "Statement I: TRUE, Statement II: FALSE",
    opt3: "Statement I: FALSE, Statement II: FALSE",
    opt4: "Statement I: TRUE, Statement II: TRUE",
    answer: "Statement I: TRUE, Statement II: FALSE",
  },
  question15: {
    ques: "Which among the following lakes is located in Jammu and Kashmir?",
    opt1: "Sambhar lake",
    opt2: "Lonar lake",
    opt3: "Agara lake",
    opt4: "Wular lake",
    answer: "Wular lake",
  },
  question16: {
    ques: "Which country shares boundary with Pakistan in the West?",
    opt1: "Iran",
    opt2: "India",
    opt3: "Iraq",
    opt4: "China",
    answer: "Iran",
  },
  question17: {
    ques: "Which of the following soils is suitable for saffron cultivation in Jammu and Kashmir region?",
    opt1: "Gruti soil",
    opt2: "Karewa soil",
    opt3: "Nambal soil",
    opt4: "Tand soil",
    answer: "Karewa soil",
  },
  question18: {
    ques: "The origin of which of the following lakes in Jammu and Kashmir is associated with the Mahabharata?",
    opt1: "Dal lake",
    opt2: "Surinsar lake",
    opt3: "Nagin lake",
    opt4: "Wullar lake",
    answer: "Surinsar lake",
  },
  question19: {
    ques: "Gulab Singh was eventually made the Raja of Jammu through which the following Treaties dated: 16-3-1846?",
    opt1: "Treaty of Delhi",
    opt2: "Treaty of Lahore",
    opt3: "Treaty of Amritsar",
    opt4: "Treaty of Srinagar",
    answer: "Treaty of Amritsar",
  },
  question20: {
    ques: "In 2021, the Jammu and Kashmir Government filed an application to seek GI tag for which of the following species of mushrooms?",
    opt1: "Telia Sattar",
    opt2: "Gucchi",
    opt3: "Boda",
    opt4: "Matij",
    answer: "Gucchi",
  },
  question21: {
    ques: "Which among the following destinations is the base camp of the Amarnath Yatra?",
    opt1: "Sonmarg",
    opt2: "Gulmarg",
    opt3: "Pampore",
    opt4: "Sanasar",
    answer: "Sonmarg",
  },
  question22: {
    ques: "Which among the following was the residential palace of Raja Amar Singh, located in Jammu?",
    opt1: "Bahu Fort",
    opt2: "Amar Mahal",
    opt3: "Akhnoor Fort",
    opt4: "Gol Ghar",
    answer: "Amar Mahal",
  },
  question23: {
    ques: "The Jawaharlal Nehru Port Trust (JNPT) is the premier container handling port in India, accounting for around 50% of the total containerized cargo volume, across the major ports of India. It is located in:",
    opt1: "Navi Mumbai",
    opt2: "Kochi",
    opt3: "Visakhapatnam",
    opt4: "Chennai",
    answer: "Navi Mumbai",
  },
  question24: {
    ques: "In October 2021, Government of India signed a share purchase agreement with Tata Sons for sale of which of the following airlines for Rs 18,000 crores?",
    opt1: "IndiGo",
    opt2: "SpiceJet",
    opt3: "Go First",
    opt4: "Air India",
    answer: "Air India",
  },
  question25: {
    ques: "When did the Indigo revolt in Bengal, a peasant movement, start?",
    opt1: "1837",
    opt2: "1859",
    opt3: "1871",
    opt4: "1889",
    answer: "1859",
  },
  question26: {
    ques: "Which of the following countries lies to the south of India?",
    opt1: "Pakistan",
    opt2: "Maldives",
    opt3: "Myanmar",
    opt4: "Bangladesh",
    answer: "Maldives",
  },
  question27: {
    ques: "Which of the following forts of Jammu and Kashmir is also known as the Koh-e-Maran?",
    opt1: "Chitkan Fort",
    opt2: "Akhnoor Fort",
    opt3: "Hari Parbat Fort",
    opt4: "Bahu Fort",
    answer: "Hari Parbat Fort",
  },
  question28: {
    ques: "As per Census 2011, what is the literacy rate of India?",
    opt1: "67.02 %",
    opt2: "70.10 %",
    opt3: "74.04 %",
    opt4: "81.03 %",
    answer: "74.04 %",
  },
  question29: {
    ques: "In 2021, under the Pradhan Mantri Kaushal Vikas Yojana, a pilot project was launched to revive which of the following crafts of Jammu and Kashmir?",
    opt1: "Calico Painting",
    opt2: "Basohli",
    opt3: "Phool Kari",
    opt4: "Namda",
    answer: "Namda",
  },
  question30: {
    ques: "Which of the following statements is FALSE with reference to the Jammu and Kashmir Reorganization Act of 2019?",
    opt1: "Ladakh has been formulated into a separate Union territory without a Legislative Assembly",
    opt2: "Jammu and Kashmir has become a Union Territory with a Legislative Assembly",
    opt3: "Governor of existing State of Jammu and Kashmir to be common Lieutenant Governor",
    opt4: "There will be no reservation for Scheduled Tribe and Scheduled Caste in Jammu and Kashmir",
    answer:
      "There will be no reservation for Scheduled Tribe and Scheduled Caste in Jammu and Kashmir",
  },
};
// converting the questions object into a map
const questionsMap = new Map(Object.entries(questions));

// storing all the keys of individual questions in an array
const qNumberArray = [];
for (const [key] of questionsMap) {
  qNumberArray.push(key);
}

// storing all the keys in a set to keep track of key availability
const qNumberSet = new Set();
while (qNumberSet.size !== 10) {
  const randomNumber = Math.floor(Math.random() * qNumberArray.length);
  // console.log(randomNumber);
  qNumberSet.add(qNumberArray[randomNumber]);
}
// console.log(qNumberSet);

const finalQuestionKeysArray = [];
for (const item of qNumberSet) {
  finalQuestionKeysArray.push(item);
}
// console.log(finalQuestionKeysArray);

const setSize = qNumberSet.size;

// using the randomly selected question reference to acquiring the data for that question from the question map
// updating the dom nodes to display the question data acquired from the question map
let flag = false;
let questionCounter = 0;
let qP;
let answer;
const generateQuestion = function () {
  nextButton.setAttribute("disabled", "true");
  cardButton.removeAttribute("disabled");
  flag = false;
  qP = questionsMap.get(`${finalQuestionKeysArray[questionCounter]}`);
  const questionLength = qP.ques.length;
  const optionsLength = Math.max(
    qP.opt1.length,
    qP.opt2.length,
    qP.opt3.length,
    qP.opt4.length
  );
  // console.log(questionLength, optionsLength);
  if (qP !== undefined) {
    answer = qP.answer;
    question.textContent = qP.ques;
    let flag = false;

    if (
      (questionLength > 100 && questionLength <= 150) ||
      (optionsLength > 15 && optionsLength <= 30)
    ) {
      card.setAttribute("style", "font-size:1.8rem");
      flag = true;
    }
    if (
      (questionLength > 150 && questionLength <= 250) ||
      (optionsLength > 30 && optionsLength <= 50)
    ) {
      card.setAttribute("style", "font-size:1.5rem");
      flag = true;
    }
    if (questionLength > 250 || optionsLength > 50) {
      card.setAttribute("style", "font-size:1rem");
      flag = true;
    }
    if (flag === false) {
      card.setAttribute("style", "font-size:2rem");
    }

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
  questionCounter++;
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
