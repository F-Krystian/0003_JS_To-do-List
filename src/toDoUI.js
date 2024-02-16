const displayToDoList = function (todoList) {
  const todoListDisplayData = todoList.map((item) =>{
    let singleItem = `
    <div class="todo__display__item" data-id="${item.id}" data-status="${item.status}">
    <div class="todo__display__item-checkbox">
      <input type="checkbox" name="todo__display__item-check" id="todo__display__item-check" class="todo__display__item-check">
    </div>
    <div class="todo__display__item-task">${item.text}</div>
    <div class="todo__display__item-buttons">
      <button class="todo__btn todo__edit-btn material-symbols-outlined">delete</button>
      <button class="todo__btn todo__delete-btn material-symbols-outlined">edit_square</button>
    </div>
     </div>
    `;

    return singleItem;
  }).join('');

  const todoListContainer = document.querySelector('.todo__display-tasks-box');
  todoListContainer.insertAdjacentHTML('afterbegin', todoListDisplayData);
}

const clearToDoListUI = function () {
  const todoListContainer = document.querySelector('.todo__display-tasks-box');

  while(todoListContainer.firstChild) {
    todoListContainer.removeChild(todoListContainer.firstChild)
  }
}

export {displayToDoList, clearToDoListUI};