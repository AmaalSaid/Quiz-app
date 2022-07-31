const startButton = document.getElementById('start-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
const controls = document.querySelector(".controls")
const questions = [
    {
        questions: 'what operation uses * in javascript?',
        answers: [
            { text: 'addition', correct: false },
            { text: 'multiplication', correct: true },
            { text: 'subtraction', correct: false },
            { text: 'division', correct: false }
        ]

    },
    {
        questions: 'what operation uses / in javascript?',
        answers: [
            { text: 'addition', correct: false },
            { text: 'multiplication', correct: false },
            { text: 'subtraction', correct: false },
            { text: 'division', correct: true }
        ]
    },
    {
        questions: 'Array in javascrip can be used to store?',
        answers: [
            { text: 'numbers and string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'all the above', correct: true }
        ]
    }
]
let shuffleQuestions, currentQuestionIndex
const answerBtnsList = document.querySelectorAll(".btn")
answerBtnsList.forEach(button => button.addEventListener("click",selectAnswer))
startButton.addEventListener('click', startGame)
controls.classList.add("hide")
function startGame() {
    startButton.classList.add('hide')
    //shuffleQuestion = questions//.sort((a,b) => Math.random() - .5)
    currentQuestionIndex = 0
    
    questionContainerElement.classList.remove('hide')
    // setNextQuestion()
    showQuestion()
}

function setNextQuestion() {
    resetState()
    
}

function showQuestion() {
    questionElement.innerText = questions[currentQuestionIndex].questions
    let j=0;
    questions[currentQuestionIndex].answers.forEach(element => {
        
        answerBtnsList[j].innerText = element.text
        
      //  if (element.correct) {
            answerBtnsList[j].dataset.correct = element.correct
        //}
        
        j++;
    });
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(e, e.target)
    if (correct) {
        e.target.classList.add('correct')
    } else {
        e.target.classList.add('wrong')
    }
    
    setTimeout(function(){
       e.target.classList.remove('correct')
        e.target.classList.remove('wrong')
        
    },1000)
    
    if (questions.length > currentQuestionIndex + 1) {
      currentQuestionIndex++;
      showQuestion()
    } else {
        
    }
    
    
}

function setStatusClass(element, correct) {
    clearStatusclasses(element)
   

}
function clearStatusclasses(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//const questions = [
//     {
//         questions: 'what operation uses * in javascript?',
//         answers: [
//             { text: 'addition', correct: false },
//             { text: 'multiplication', correct: true },
//             { text: 'subtraction', correct: false },
//             { text: 'division', correct: false }
//         ]

//     },
//     {
//         questions: 'what operation uses / in javascript?',
//         answers: [
//             { text: 'addition', correct: false },
//             { text: 'multiplication', correct: false },
//             { text: 'subtraction', correct: false },
//             { text: 'division', correct: true }
//         ]
//     },
//     {
//         questions: 'Array in javascrip can be used to store?',
//         answers: [
//             { text: 'numbers and string', correct: false },
//             { text: 'booleans', correct: false },
//             { text: 'other arrays', correct: false },
//             { text: 'all the above', correct: true }
//         ]
//     }
// ]