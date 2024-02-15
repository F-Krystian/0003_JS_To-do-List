import { toDoList } from "../src/toDoDataDB.js";

const addNewTask = function addNewtaskToDB(data) {
  let getLocalStorage = localStorage.getItem('toDoDB');
  let toDoData = JSON.parse(getLocalStorage);


  const newItem = {
    id : toDoList.length + 1,
    toDoText : data,
    status : 0 
  }

  toDoList.push(newItem);
  let toDoListString = JSON.stringify(toDoList)
  localStorage.setItem('toDoDB', toDoListString);

  return toDoList;
}

export {addNewTask};