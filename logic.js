"use strict";

const pomodoroBtn = document.querySelector(".pomodoro");
const shortBreakBtn = document.querySelector(".short_break");
const longBreakBtn = document.querySelector(".long_break");
const timer = document.querySelector(".timer");
const timeoutAudio = document.querySelector("#alarm_audio");

document.title = "Tomato Timer";
let startInterval;
let time;
timeoutAudio.src = "/kitchen-timer.mp3";
timeoutAudio.load();

const stopTimer = () => {
  clearInterval(startInterval);
};

const startTimer = () => {
  let minutes = Math.floor(time / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.innerText = `${minutes}:${seconds}`;
  document.title = timer.innerText;

  if (!time) {
    stopTimer();
    timeoutAudio.play();
  }
  time--;
};

pomodoroBtn.addEventListener("click", () => {
  stopTimer();
  time = 25 * 60;
  startInterval = setInterval(startTimer, 1000);
});
shortBreakBtn.addEventListener("click", () => {
  stopTimer();
  time = 5 * 60;
  startInterval = setInterval(startTimer, 1000);
});
longBreakBtn.addEventListener("click", () => {
  stopTimer();
  time = 30 * 60;
  startInterval = setInterval(startTimer, 1000);
});
