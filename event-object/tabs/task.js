let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tab__content');

tabs.forEach(element => {
    element.addEventListener('click', makeTabActive)
});

function makeTabActive() {
    let chosenTab  =  this
    function findtabindex(element,index,array) {
        if (element === chosenTab) return true
        else return false
    }
    //console.log(Array.from(tabs));
    let n = Array.from(tabs).findIndex(findtabindex);
    
     tabs.forEach(element => {
        element.setAttribute('class','tab')
    });
    
    content.forEach(element => {
        element.setAttribute('class','tab__content')
    });
    Array.from(tabs)[n].setAttribute('class','tab tab_active')
    Array.from(content)[n].setAttribute('class','tab__content tab__content_active')

}