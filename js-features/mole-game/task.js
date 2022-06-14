let successClickCounterString = document.getElementById('dead');
let failClickCounterString = document.getElementById('lost');
let successClickCounter = parseInt(successClickCounterString.textContent);
let failClickCounter = parseInt(failClickCounterString.textContent);
/* function checkMole (hole) {
    if (hole.classList.contains('hole hole_has-mole')){
        successClickCounter++
    }
    else {
        failClickCounter++
    }
} */



if ((successClickCounter < 10)||(failClickCounter<5)) {
    window.onclick = element => { 
        console.log(element);
        if (element.target.classList.contains('hole_has-mole')) {successClickCounter++; successClickCounterString.textContent = successClickCounter}
        else {failClickCounter++; failClickCounterString.textContent = failClickCounter}}
}
else if(successClickCounter >= 10) alert('pobed')
else if(failClickCounter >= 5) alert('loose')
