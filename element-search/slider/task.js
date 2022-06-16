let pictures = Array.from(document.getElementsByClassName('slider__item'))
let dots = Array.from(document.getElementsByClassName('slider__dot'))
let leftArrow = document.querySelector('.slider__arrow_prev')
let rigthArrow = document.querySelector('.slider__arrow_next')
console.log(pictures);

function findActiveSlide(pictures) {
    let activeSlide = document.querySelector('.slider__item_active');
    return pictures.indexOf(activeSlide);  
}

function changeSlide(pictures,active,next) {
    pictures[active].setAttribute('class','slider__item')
    pictures[next].setAttribute('class','slider__item slider__item_active')
}

function slideRigth(pictures) {
    if (findActiveSlide(pictures) < pictures.length - 1) {
        return findActiveSlide(pictures) + 1;
    }
    else {
        return 0;
    }
}

function slideLeft(pictures) {
    if (findActiveSlide(pictures) === 0) {
        return pictures.length - 1;
    }
    else {
        return findActiveSlide(pictures) - 1;
    }
}

leftArrow.onclick = function () {
    changeSlide(pictures,findActiveSlide(pictures),slideLeft(pictures))
}

rigthArrow.onclick = function () {
    changeSlide(pictures,findActiveSlide(pictures),slideRigth(pictures))
}

dots.forEach((value,index) => {
    value.onclick = function () {
        changeSlide(pictures, findActiveSlide(pictures), index)
    }
});