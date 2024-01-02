const quizData = [{
    question: " What is JavaScript?",
    options: [
        "JavaScript is a scripting language used to make the website interactive",
        "JavaScript is an assembly language used to make the website interactive",
        "JavaScript is a compiled language used to make the website interactive",
        " None of the mentioned"
    ],
    correct: 0,
},
{
    question: " Which of the following is correct about JavaScript?",
    options: [
        "JavaScript is an Object-Based language",
        "JavaScript is Assembly-language",
        " JavaScript is an Object-Oriented language",
        " JavaScript is a High-level language"
    ],
    correct: 0,
},
{
    question: " Arrays in JavaScript are defined by which of the following statements?",
    options: [
        "It is an ordered list of values",
        " It is an ordered list of objects",
        "It is an ordered list of string",
        "  It is an ordered list of functions"
    ],
    correct: 0,
},
{
    question: "  Which of the following is not javascript data types?",
    options: [
        " Null type",
        "Undefined type",
        "Number type",
        "  All of the mentioned"
    ],
    correct: 3,

}, {
    question: " Where is Client-side JavaScript code is embedded within HTML documents?",
    options: [
        "A URL that uses the special javascript:code",
        "A URL that uses the special javascript:protocol",
        "A URL that uses the special javascript:encoding",
        "A URL that uses the special javascript:stack"
    ],
    correct: 1,
}]
//? Step 2: JavaScript Initialization

const answersElem = document.querySelectorAll(".answer");
console.log(answersElem);
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );
// console.log(option_2);
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  //  To get all the options
  options.forEach((curOption, index) => {
    // It is a dynamic way of accessing DOM elements.
    return (window[`option_${index + 1}`].innerText = curOption);
  });
};

loadQuiz();

//? Step 4: Get Selected Answer Function on Button click

const getSelected = () => {
  const answerElement = Array.from(answersElem);
  return answerElement.findIndex((curOption) => curOption.checked);
};

const deselectAnswers = () => {
  answersElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();
  console.log(selectedOptionIndex);

  //   let's check if the answer is correct or not
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  //   lets increment the currentQuiz value to get the next array elem
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
  }
});