import { saveToDoList , getToDoList, clearToDoListStorage} from "./storage.js";
import { displayToDoList, clearToDoListUI } from "./todoUI.js";

const addToDoTask = function(newTask) {
  let toDoList = getToDoList();
  let newTaskItem = {
    id: toDoList.length + 1,
    text: newTask,
    status : 'pending'
  }

  toDoList.push(newTaskItem);

  saveToDoList(toDoList);
  clearToDoListUI();
  displayToDoList(getToDoList())
}

export { addToDoTask };