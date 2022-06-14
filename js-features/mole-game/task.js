let successClickCounterString = document.getElementById('dead');
let failClickCounterString = document.getElementById('lost');
let totalholes = document.querySelectorAll('.hole').length;
let successClickCounter = parseInt(successClickCounterString.textContent);
let failClickCounter = parseInt(failClickCounterString.textContent);

/* 
// window-click 
 if ((successClickCounter < 10)||(failClickCounter<5)) {
    window.onclick = element => { 
        console.log(element);
        if (element.target.classList.contains('hole_has-mole')) {
            successClickCounter++;
             successClickCounterString.textContent = successClickCounter
             if(successClickCounter >= 10) {
                  alert('pobed');
                  failClickCounter = 0;
                  successClickCounter = 0;
                  successClickCounterString.textContent = successClickCounter;
                  failClickCounterString.textContent = failClickCounter;
                }
            }
        else {
            failClickCounter++;
            failClickCounterString.textContent = failClickCounter;
            if(failClickCounter >= 5) { 
                alert('loose');
                failClickCounter = 0;
                successClickCounter = 0;
                successClickCounterString.textContent = successClickCounter;
                failClickCounterString.textContent = failClickCounter;
            };
        }
    }
}  */

// ну или так, хотя хотелось бы компактнее
for (let i = 1; i < totalholes+1; i++) {
    document.getElementById('hole'+i).onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            successClickCounter++;
            successClickCounterString.textContent = successClickCounter;
        }
        else {
            failClickCounter++;
            failClickCounterString.textContent = failClickCounter;
        }
        if(successClickCounter >= 10) {
            alert('pobed');
            failClickCounter = 0;
            successClickCounter = 0;
            successClickCounterString.textContent = successClickCounter;
            failClickCounterString.textContent = failClickCounter;
          }
          if(failClickCounter >= 5) { 
            alert('loose');
            failClickCounter = 0;
            successClickCounter = 0;
            successClickCounterString.textContent = successClickCounter;
            failClickCounterString.textContent = failClickCounter;
          }
    }    
}