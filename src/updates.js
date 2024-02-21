import { getToDoList, saveToDoList , clearToDoListStorage } from "./storage.js";
import { clearToDoListUI, displayToDoList } from "./todoUI.js";
let toDoList = getToDoList();

const updates = function() {
  clearToDoListStorage();
  saveToDoList(toDoList);
  clearToDoListUI(); 
  displayToDoList(getToDoList());
}

export { updates };