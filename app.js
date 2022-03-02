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
        }
    }

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

    taskInput.value = '';
    e.preventDefault();

}