const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    const taskItem = document.createElement('div');
    taskItem.textContent = task;
    taskItem.style.background = 'white';
    taskItem.style.color = 'black';
    taskItem.style.padding = '10px';
    taskItem.style.marginBottom = '10px';
    taskItem.style.borderRadius = '6px';
    todoList.appendChild(taskItem);
    input.value = '';
  }
});
