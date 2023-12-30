const todoList = [];
renderization();

function addTodo() {
  const input = document.querySelector('.js-input');
  const date = document.querySelector('.js-date');
  const name = input.value;
  const dateValue = date.value;
  const todo = {date: dateValue, name: name};
  todoList.push(todo);
  input.value = '';
  date.value = '';
  renderization();
}

function renderization () {
  let finalHtml = '';
  todoList.forEach(function(todo, i){
    const html = `
      <div>${todo.name}</div>
      <div>${todo.date}</div>
      <button class="button delete" onclick="
      deleteTodo(${i})
      ">Delete</button>
    `;
    finalHtml += html;
  })
  document.querySelector('.js-todo-list').innerHTML = finalHtml;
}

function deleteTodo (index) {
  todoList.splice(index, 1);
  renderization();
}