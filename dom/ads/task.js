let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let speed = 1000;
let i = 0;

let rotate = function rotate(elements) {
    clearInterval(id);
    makeDeActive(elements,'rotator__case')
    i++;
    
    if (i === elements.length) {
        i = 0;
    }
    
    makeactive(elements[i],'rotator__case_active');
    id = setInterval(rotate,speed,rotator);
}

 function makeDeActive (elements, oldclass) {
    elements.forEach(element => {
        element.className = oldclass;
    });
} 

function makeactive (element,newclass) {
    element.classList.toggle(newclass);
}

let id = setInterval(rotate,speed,rotator)