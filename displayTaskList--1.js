const listContainer = document.querySelector('.todo__display-tasks-box');
import { toDoList } from "./toDoDataDB.js";

const getLocalStorage = function () {
  let getLocalStorage = localStorage.getItem('toDoDB');
  let toDoData = JSON.parse(getLocalStorage);

  console.log(toDoData);

  const toDoDataRow = toDoData.map((item) => {
    let itemRow = `
    <div class="todo__display__item" data-id="${item.id}" data-status="${item.status}">
        <div class="todo__display__item-checkbox">
          <input type="checkbox" name="todo__display__item-check" id="todo__display__item-check" class="todo__display__item-check">
        </div>
        <div class="todo__display__item-task">${item.toDoText}</div>
        <div class="todo__display__item-buttons">
          <button class="todo__btn todo__edit-btn material-symbols-outlined">delete</button>
          <button class="todo__btn todo__delete-btn material-symbols-outlined">edit_square</button>
        </div>
      </div>
    `;

    return itemRow;
  }).join('');

  while(listContainer.firstChild){
    listContainer.removeChild(listContainer.firstChild);
  }
  listContainer.insertAdjacentHTML('afterbegin', toDoDataRow);
}

export { getLocalStorage };