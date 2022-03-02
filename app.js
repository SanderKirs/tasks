const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');
const delTasksBtn = document.querySelector('#del-tasks');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener('click', deleteTasks);

function deleteTasks(){
    while(tasksList.firstChild){
        tasksList.removeChild(tasksList.firstChild);
    }
}

function deleteTask(e){
    if (e.target.textContent == 'X'){
        if (confirm("Do you want to delete task?")){
            e.target.parentElement.remove();
            task = e.target.parentElement.firstChild.textContent;
            deleteTaskFromLocalStorage(task);
        }
    }

}

function deleteTaskFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement, index){
        if(tasksElement === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(e){
    const task = taskInput.value;

    const li = document.createElement('li');
    li.className = 'collection-item';
    const text = document.createTextNode(task);
    li.appendChild(text);
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('X'));
    li.appendChild(link);
    link.className = 'secondary-content';

    const ul = document.querySelector('.collection');
    ul.appendChild(li);

    addTaskToLocalStorage(task);

    taskInput.value = '';
    e.preventDefault();

}

function addTaskToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}