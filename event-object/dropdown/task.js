let activeMenu = document.querySelector('.dropdown');
let allmenu = activeMenu.querySelectorAll('.dropdown__link')

activeMenu.addEventListener('click',activeMenuClick);

function activeMenuClick(event) {  
    if (activeMenu.querySelector('.dropdown__list').getAttribute('class')==='dropdown__list') {
        activeMenu.querySelector('.dropdown__list').setAttribute('class','dropdown__list dropdown__list_active');
    }

    else if (activeMenu.querySelector('.dropdown__list').getAttribute('class')==='dropdown__list dropdown__list_active') {
        activeMenu.querySelector('.dropdown__list').setAttribute('class','dropdown__list');
    }
    event.preventDefault();
    return false;
}

allmenu.forEach(element => {
    element.addEventListener('click',dropDownMenuCheck)
});

function dropDownMenuCheck(event) {
    let checkedMenu = this.innerText;
    activeMenu.querySelector('.dropdown__value').textContent = checkedMenu;
    //activeMenuClick();
    event.preventDefault(); // это работает
    return false; // а почему это не работает ?
}