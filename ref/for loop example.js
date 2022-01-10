// let timer = document.createElement("h2");
// timer.setAttribute("id", "timer");

let timer = document.getElementById("timer");

for (let i = 800; i >= 0; i--) {
  timer.innerText = i;
  console.log(i);
}
