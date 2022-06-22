let btns = Array.from(document.querySelectorAll('.font-size'))
let btnSmallSize =  document.querySelector('.font-size_small')
let btnNormalSize = document.querySelector('.font-size_active')
let btnBigSize = document.querySelector('.font-size_big')

function clearSize() {
    btns.forEach(element => {
        element.classList.remove('font-size_active')
    });    
}


function txtSmallSize(event) {
    clearSize();
    btnSmallSize.setAttribute('class','font-size font-size_active')
    btnSmallSize.closest('.book').setAttribute('class','book book_fs-small')
    event.preventDefault();
    return false;
}

function txtNormalSize(event) {
    clearSize();
    btnNormalSize.setAttribute('class','font-size font-size_active')
    btnNormalSize.closest('.book').setAttribute('class','book')
    event.preventDefault();
    return false;
}

function txtBigSize(event) {
    clearSize();
    btnBigSize.setAttribute('class','font-size font-size_active')
    btnBigSize.closest('.book').setAttribute('class','book book_fs-big')
    event.preventDefault();
    return false;
}

btnSmallSize.addEventListener('click', txtSmallSize)
btnNormalSize.addEventListener('click', txtNormalSize)
btnBigSize.addEventListener('click', txtBigSize)