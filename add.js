const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
  savedTasks.forEach(text => addTodo(text));
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    saveToStorage(text);
    input.value = '';
  }
});

function addTodo(text) {
  const div = document.createElement('div');
  div.className = 'todo-item';

  const span = document.createElement('span');
  span.textContent = text;

  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.className = 'delete-btn';
  del.onclick = () => {
    div.remove();
    removeFromStorage(text);
  };

  div.appendChild(span);
  div.appendChild(del);
  list.appendChild(div);
}

function saveToStorage(task) {
  const existing = JSON.parse(localStorage.getItem('todos')) || [];
  existing.push(task);
  localStorage.setItem('todos', JSON.stringify(existing));
}

function removeFromStorage(task) {
  let existing = JSON.parse(localStorage.getItem('todos')) || [];
  existing = existing.filter(item => item !== task);
  localStorage.setItem('todos', JSON.stringify(existing));
}
