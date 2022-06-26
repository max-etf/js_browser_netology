let adder = document.getElementById('tasks__add')
let taskList = document.getElementById('tasks__list')
//tasks__list
adder.addEventListener('click',(event) => addTask(event))

function addTask(event) {
    let text = document.querySelector('input').value;
    if (text.length>0){
    let task = document.createElement('div')
    task.setAttribute('class','task')
    let close = document.createElement('a')
    close.innerHTML = '&times;'
     close.setAttribute('class','task__remove')
    close.setAttribute('href','#')
    close.addEventListener('click',() => removeTask.call(close),once=true)
    task.innerHTML = `<div class="task__title">${text}</div>`
    task.appendChild(close)
    taskList.appendChild(task)
    document.querySelector('input').value ='';
    }
    event.preventDefault(); 
    return false;
}

function removeTask() {
    this.parentElement.remove();
}
