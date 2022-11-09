const data = [
  {
    id: 1,
    question: 'Which of these fish is actually a fish?',
    answers: [
      { answer: 'swordfish', isCorrect: true },
      { answer: 'jellyfish', isCorrect: false },
      { answer: 'starfish', isCorrect: false },
      { answer: 'crayfish', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'A flutter is a group of:',
    answers: [
      { answer: 'bees', isCorrect: false },
      { answer: 'penguins', isCorrect: false },
      { answer: 'butterflies', isCorrect: true },
      { answer: 'camels', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'A group of which animals is referred to as a wake?',
    answers: [
      { answer: 'bats', isCorrect: false },
      { answer: 'vultures', isCorrect: true },
      { answer: 'ants', isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answerContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let total = 0;
let selectedAnswer;


// for reseting
const playAgain = () => {
 qIndex = 0;
 correctAnswer = 0;
 wrongAnswer = 0;
 total = 0;
 selectedAnswer;
 showQuestion(qIndex);
}

play.addEventListener('click', () => {
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain();
})

const showResult = () => {
    resultScreen.style.display = 'block'; // for showing resultscreen default value is none
    gameScreen.style.display = 'none'; // for disabling view of gamescreen default value is block

    resultScreen.querySelector('.correct').textContent =
        `Correct Answers: ${correctAnswer}`
    
    resultScreen.querySelector('.wrong').textContent =
        `Wrong Answers: ${wrongAnswer}`

    resultScreen.querySelector('.score').textContent = 
        `Total Score: ${(correctAnswer - wrongAnswer) * 10}`
}

const showQuestion = qNumber => {
    if(qIndex === data.length) return showResult(); // when qIndex is equal to data.length then will call showResult function
    selectedAnswer = null; // to reset the selectedAnswer
  question.textContent = data[qNumber].question; // shows the question
  
  // shows the answer from the array of data
  answerContainer.innerHTML = data[qNumber].answers.map(
    (item, index) =>                                           
      `<div class="answer">
        <input name="answer" type="radio" id="${index}" value="${item.isCorrect}"> 
        <label for="1">${item.answer}</label>
        </div>`
  ).join(""); // to remove the stings because data coming from an array
  selectAnswer();
};

const selectAnswer = () => {
    answerContainer.querySelectorAll('input').forEach(element => {
        element.addEventListener("click",(e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if(selectedAnswer !== null){
            selectedAnswer === 'true'? correctAnswer++ : wrongAnswer++
            qIndex++;
            showQuestion(qIndex);
        }else{
            alert("Select an answer please!") // if the user does'nt select answer else block will trigger
        }
    })
}

showQuestion(qIndex);
submitAnswer();
