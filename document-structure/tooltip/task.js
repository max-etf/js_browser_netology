let links = document.querySelectorAll('.has-tooltip')
links.forEach(element => {
    element.addEventListener('click',(event) => hintToggle(event,element))  
});
let hint = document.createElement('div')
hint.setAttribute('class','tooltip')
document.querySelector('body').appendChild(hint);

function hintToggle(event,element) {

    hint.textContent = element.getAttribute('title');
    let hintCoordLeft = element.getBoundingClientRect().left;
    let hintCoordBottom = element.getBoundingClientRect().bottom;
    hint.setAttribute('style',`left: ${hintCoordLeft}px; top: ${hintCoordBottom}px`)
    hint.classList.toggle('tooltip_active');
    
    event.preventDefault();
    return false;
}