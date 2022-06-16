'use stirct'
let modalshow = document.getElementById('modal_main'); 
let modalsuccess = document.getElementById('modal_success');
let buttonMakeSuccess = document.querySelector('.btn_danger');
modalshow.setAttribute('class','modal modal_active');

let modalclose = (document.querySelectorAll('.modal__close_times'));
modalclose.forEach(element => {
    element.onclick = () => {
        modalshow.setAttribute('class','modal modal__close');
        modalsuccess.setAttribute('class','modal modal__close');
    }
});

buttonMakeSuccess.onclick = function() {
    modalshow.setAttribute('class','modal modal__close');
    modalsuccess.setAttribute('class','modal modal_active');
    return false;
}