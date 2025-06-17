// task 1
const getMessage = document.querySelector(".timer");
const getBtn = document.querySelector(".btn");
let time = 60;
let timer;

function startTimer() {
  time = 60;
  getMessage.innerHTML = `залишилось: ${time}хв`;
  timer = setInterval(() => {
    time -= 1;
    getMessage.innerHTML = `залишилось: ${time}хв`;

    if (time === 30) {
      alert("залишилось 30хв");
    } else if (time === 0) {
      clearInterval(timer);
      getMessage.innerHTML = "час вийшов";
    }
  }, 60000);
}
console.log(time);
getBtn.addEventListener("click", startTimer);

// task 2
const getMess = document.querySelector(".message");
const getBtnStart = document.querySelector(".btn-start");
let sec = 30;
let timer2;

function startTimer2() {
  sec = 30;
  getBtnStart.disabled = true;
  clearInterval(timer2);
  getMess.style.color = "black";

  timer2 = setInterval(() => {
    sec -= 1;
    getMess.innerHTML = `пройшло: ${sec}sec`;
    if (sec === 10) {
      getMess.style.color = "red";
    } 
    else if (sec === 0) {
  clearInterval(timer2);
  getBtnStart.disabled = false;

  explosionVideo.style.display = "block";
  explosionVideo.play();

  // Запускаем звук только через 3 секунды
  setTimeout(() => {
    explosionSound.currentTime = 0;
    explosionSound.play();
  }, 5000);
}
  }, 1000);
}

getBtnStart.addEventListener("click", startTimer2);
