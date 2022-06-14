const timer = document.getElementById("timer")
let timerCounter = parseInt(timer.textContent);



let id = setInterval(() => funcTimerCounter(),1000)

function funcTimerCounter() {
    if (timerCounter === 0) {alert("You win"); clearInterval(id)} 
    else {
        timerCounter--;
        timer.textContent = timerCounter;
    }
}