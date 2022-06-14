const counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function cookieclicker() {
    image.width = 220;
    image.heigth = 220;
    counter.textContent++;
    setInterval(()=>{image.width =200; image.heigth = 200 },50)
};


image.onclick = cookieclicker;


/* console.log(counter);
console.log(image);
console.log(counter.textContent);
counter.textContent = 199;
console.log(counter.textContent); */