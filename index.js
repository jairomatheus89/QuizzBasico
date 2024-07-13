//boas vindas e Start
var nickvulgo = window.prompt("Qual teu vulgo, otário?");
document.getElementById('userName').innerHTML = nickvulgo.toLowerCase();

function StartQuizz(){
    document.getElementById('quizzBox').style.visibility = 'visible';
}




//QUESTIONs

const questions = [
    {question: 'Qual o resultado da expressão (2 + 5):', answer:'7'},
    {question: 'Okay sabixão, Agora me diga qual o resultado da expressão (4 * 2):', answer:'8'},
    {question: 'Qual é a capital da França?', answer:'paris'}
];

let currentQuestionIndex = 0;

const divQuizz = document.getElementById('quizzBox');

const btnResp = document.getElementById('respbut');
const input = document.getElementById('resp');
const questionElement = document.getElementById('question');
const questionCountElement = document.getElementById('questionCount');
const failureDiv = document.getElementById('failureDiv');

function checkAnswer() {
    const userAnswer = input.value.toLowerCase();
    if (userAnswer === questions[currentQuestionIndex].answer) {
        currentQuestionIndex ++;
        if (currentQuestionIndex < questions.length) {
            questionElement.innerText = questions[currentQuestionIndex].question;
            questionCountElement.innerHTML = `Question: ${currentQuestionIndex + 1} de ${questions.length}`;
        } else {
            location.href = "jumpscare.html";
        }

    } else {
        divQuizz.innerHTML = 'errado Otário... clique em "restart" para reiniciar'
        failureDiv.style.visibility = 'visible';
    }
    input.value = '';
}


btnResp.addEventListener('click', checkAnswer);

function restartPage(){
    window.location.reload();
}