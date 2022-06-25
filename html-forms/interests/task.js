'use strict'
let inputs = Array.from(document.querySelectorAll('input'))

inputs.forEach(element => {  
    element.addEventListener('change', () => changer(element))
});

function changer(param) {
    const mainchecked = param.checked
    //console.log(param)
    const parent = param.closest('.interest')
    if(parent.querySelectorAll('ul').length > 0 ){
        parent.querySelectorAll('input').forEach(element => {
            element.checked = mainchecked
        });
    }
}
