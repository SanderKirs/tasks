const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);

function deleteTask(e){
    if (e.target.textContent == 'X'){
        if (confirm("Do you want to delete task?")){
            e.target.parentElement.remove();
        };
    };

};


function addTask(e){
    const task = taskInput.value;

    const li = document.createElement('li');
    li.className = 'collection-item';
    const text = document.createTextNode(task);
    li.appendChild(text);
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    console.log(link);
    link.appendChild(document.createTextNode('X'));
    li.appendChild(link);
    link.className = 'secondary-content';

    const ul = document.querySelector('.collection');
    ul.appendChild(li);

    console.log(ul);
    taskInput.value = '';
    e.preventDefault();

}