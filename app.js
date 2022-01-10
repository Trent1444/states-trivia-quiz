let timeLeft = 100;
function countDown() {
  if (timeLeft === 0) clearInterval(timerId);
  else timeLeft--;
  document.querySelector("#timeLeft").innerText = timeLeft;
}

function startTimer() {
  const timerId = setInterval(countDown, 1000);
}
