const quizForm = document.getElementById('quizForm');
const question = document.getElementById('question');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');

let currentQuestion = 0;
let userScore = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'a'
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: ['Mars', 'Earth', 'Jupiter', 'Venus'],
    correctAnswer: 'c'
  }
];

function displayQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    question.textContent = q.question;
    document.getElementById('aText').textContent = q.answers[0];
    document.getElementById('bText').textContent = q.answers[1];
    document.getElementById('cText').textContent = q.answers[2];
    document.getElementById('dText').textContent = q.answers[3];
  } else {
    endQuiz();
  }
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    feedback.textContent = 'Correct!';
    userScore++;
  } else {
    feedback.textContent = 'Incorrect!';
  }
  currentQuestion++;
  displayQuestion();
}

function endQuiz() {
  feedback.textContent = '';
  quizForm.style.display = 'none';
  score.textContent = `Your score: ${userScore}/${questions.length}`;
}

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    checkAnswer(selectedAnswer.value);
  }
});

displayQuestion();
