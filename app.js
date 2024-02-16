import { getToDoList } from "./src/storage.js"; 
import { displayToDoList, clearToDoListUI } from "./src/todoUI.js";
import { handleAddTask, handleEditTask, handleDeleteTask, handleToggleTask } from "./src/eventHandlers.js"

const initApp = function () {
  const dataArray = getToDoList();

  clearToDoListUI();
  displayToDoList(dataArray);

  handleAddTask();
}


//Calls
initApp();