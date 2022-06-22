let notes = Array.from(document.querySelectorAll('.reveal'))
let note = document.querySelector('.reveal');


let Visible  = function (element) {
    const viewportHeigth = window.innerHeight;
    if ((element.getBoundingClientRect().top < viewportHeigth )&&(element.getBoundingClientRect().bottom >0)) {
    element.classList.add('reveal_active')}
    else {
        element.classList.remove('reveal_active')
    }
}

let checking = function () {
    notes.forEach(element => {
        Visible(element);
    });
}

window.addEventListener('scroll',checking)
