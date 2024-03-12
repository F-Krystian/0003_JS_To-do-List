const displayToDoList = function (todoList) {
  const todoListDisplayData = todoList.map((item) =>{
    let checkStatus = item.status === 'done' ? 'checked' : '';
    let singleItem = `
    <div class="todo__display__item" draggable="true" data-id="${item.id}" data-status="${item.status}">
    <div class="todo__display__item-checkbox">
      <input type="checkbox" name="todo__display__item-check" id="todo__display__item-check" class="todo__display__item-check" ${checkStatus}>
    </div>
    <div class="todo__display__item-task">${item.text}</div>
    <div class="todo__display__item-buttons">
      <button class="todo__btn todo__edit-btn material-symbols-outlined">edit_square</button>  
      <button class="todo__btn todo__delete-btn material-symbols-outlined">delete</button>
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

const editChangesUI = function(btn) {
  console.log(btn);
  let taskRow = btn.closest('.todo__display__item');
  let taskTextItem = taskRow.querySelector('.todo__display__item-task');
  let taskTextItemText = taskTextItem.textContent;
  
  //Replace - New input element
  let inputTask = document.createElement('input');
  
  inputTask.setAttribute('type', 'text');
  inputTask.setAttribute('class', 'todo__input__item-task');
  inputTask.setAttribute('value', taskTextItemText);

  taskTextItem.parentNode.replaceChild(inputTask, taskTextItem);

  // Replace - New edit btn
  let doneEditBtn = document.createElement('button');

  doneEditBtn.setAttribute('class', 'todo__btn todo__edit-btn todo__edit-done-btn material-symbols-outlined')
  doneEditBtn.innerText = 'done';
  btn.parentNode.replaceChild(doneEditBtn, btn);
}

export {displayToDoList, clearToDoListUI, editChangesUI};

