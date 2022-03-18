//selectors:
const mlcounterEl = document.querySelector("#mlcounter");
const secondsEl = document.querySelector("#seconds");
const mcounterEl = document.querySelector("#mcounter");
const hcounterEl = document.querySelector("#hcounter");
const startBtn = document.querySelector("#startbtn");
const stopBtn = document.querySelector("#stopbtn");
const resetBtn = document.querySelector("#resetbtn");

//function:
let mlcounter = 00;
let seconds = 00;
let mcounter = 00;
let hcounter = 00;

function timer() {
  mlcounter++;
  if (mlcounter < 10) {
    mlcounter = "0" + mlcounter;
  }
  if (mlcounter >= 10 && mlcounter < 100) {
    mlcounterEl.innerHTML = mlcounter;
  }
  if (mlcounter === 100) {
    seconds++;
    mlcounter = 00;
    // seconds = seconds;
    secondsEl.innerHTML = seconds;
  }
  if (seconds < 10) {
    // seconds = `0${seconds}`;
    secondsEl.innerHTML = "0" + seconds;
  }
  if (seconds >= 0 && seconds < 60) {
    secondsEl.innerHTML = seconds;
  }
  if (seconds === 60) {
    mcounter++;
    seconds = 00;
    mcounterEl.innerHTML = "0" + mcounter;
  }
  if (mcounter >= 10 && mcounter < 60) {
    mcounterEl.innerHTML = mcounter;
  }
  if (mcounter === 60) {
    hcounter++;
    mcounter = 00;
    hcounterEl.innerHTML = hcounter;
  }
  if (hcounter < 10) {
    hcounterEl.innerHTML = `0${hcounter}`;
  }
}
//trigger or eventListener
startBtn.addEventListener("click", () => {
  interval = setInterval(timer, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  mlcounter = "00";
  seconds = "00";
  mcounter = "00";
  hcounter = "00";
  mlcounterEl.innerHTML = mlcounter;
  secondsEl.innerHTML = seconds;
  mcounterEl.innerHTML = mcounter;
  hcounterEl.innerHTML = hcounter;
});
