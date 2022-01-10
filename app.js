let timeLeft;
let timerId;

function countDown() {
  if (timeLeft === 0) clearInterval(timerId);
  else timeLeft--;
  document.querySelector("#timeLeft").innerText = timeLeft;
}

function startTimer() {
  if (timeLeft <= 200) alert("The quiz has already been started");
  else {
    timeLeft = 200;
    timerId = setInterval(countDown, 1000);
  }
}
