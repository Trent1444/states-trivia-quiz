let timeLeft = 4;

function countDown() {
  console.log(timeLeft);
  if (timeLeft === 0) clearInterval(timerId);
  else timeLeft--;
}

const timerId = setInterval(countDown, 1000);
