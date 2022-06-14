const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function () {
    let timerId = null;
    image.width = 220;
    image.heigth = 220;
    counter.textContent++;
    timerId = setTimeout(()=>{image.width =200; image.heigth = 200; clearTimeout(timerId) },100) //а как сбросить timerID ?
};

