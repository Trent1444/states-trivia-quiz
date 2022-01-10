// declaring variables related to quiz timer
let timeLeft;
let timerId;

// logic that makes the timer count down every second
function countDown() {
  if (timeLeft === 0) {
    document.querySelector("#startQuiz").innerText = "Restart Quiz!";
    clearInterval(timerId);
  } else timeLeft--;
  document.querySelector("#timeLeft").innerText = timeLeft;
}

// onclick function that starts timer
function startTimer() {
  if (timeLeft === 0) {
    timeLeft = 20;
    timerId = setInterval(countDown, 1000);
  } else if (timeLeft <= 20) alert("The quiz has already been started");
  else {
    timeLeft = 20;
    timerId = setInterval(countDown, 1000);
  }
}
