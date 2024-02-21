import { saveToDoList , getToDoList, clearToDoListStorage} from "./storage.js";
import { displayToDoList, clearToDoListUI, editChangesUI } from "./todoUI.js";

let toDoList = getToDoList();

const addToDoTask = function(newTask) {
  let maxId = toDoList.reduce((max, task) => {
    return  Math.max(max, task.id)
  }, 0);

  let newTaskItem = {
    id: parseInt(maxId) + 1,
    text: newTask,
    status : 'pending'
  }

  toDoList.push(newTaskItem);

  clearToDoListUI();  
  saveToDoList(toDoList);
  displayToDoList(getToDoList())
}

const deleteToDoTask = function (btn){
  let itemContainer = btn.closest('.todo__display__item');
  let itemID = itemContainer.dataset.id;

  const filteredToDoList = toDoList.filter((item) => {
    return item.id != itemID
  })
  toDoList = [...filteredToDoList];

  clearToDoListStorage();
  saveToDoList(toDoList);
  clearToDoListUI(); 
  displayToDoList(getToDoList());

}

const editToDoTask = function (btn) {
  if(btn.classList.contains('todo__edit-btn') && btn.classList.contains('todo__edit-done-btn')){
    let itemParent = btn.closest('.todo__display__item');
    let itemParentID = parseInt(itemParent.dataset.id);

    let editedText = itemParent.querySelector('.todo__input__item-task').value;
    let taskToUpdate = toDoList.find(task => task.id === itemParentID);
    taskToUpdate.text = editedText;

    clearToDoListStorage();
    saveToDoList(toDoList);
    clearToDoListUI(); 
    displayToDoList(getToDoList());

  } else if (btn.classList.contains('todo__edit-btn') && !btn.classList.contains('todo__edit-done-btn')){
    editChangesUI(btn);   
  }
}

const checkToDotask = function (btn) {
  let itemParent = btn.closest('.todo__display__item');
  let itemParentID = parseInt(itemParent.dataset.id);
  let taskToUpdate = toDoList.find(task => task.id === itemParentID);
  if(btn.checked) {
    taskToUpdate.status = 'done';
  } else {
    taskToUpdate.status = 'pending';
  }

  clearToDoListStorage();
  saveToDoList(toDoList);
  clearToDoListUI(); 
  displayToDoList(getToDoList());
}

export { addToDoTask , deleteToDoTask, editToDoTask , checkToDotask};