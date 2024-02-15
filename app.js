import { addNewTask } from "./src/addNewTask.js";
import { getLocalStorage } from "./src/displayTaskList.js";
import { toDoList } from "./src/toDoDataDB.js";

const inputNewTask = document.querySelector('.add-task-input');
const addNewTaskBtn = document.querySelector('.add-task-btn');

getLocalStorage();

const getInput = function getInputTextOnEnter(e) {
  if (e.keyCode === 13 || e.key === 'Enter'){
    if(!inputNewTask.value.trim()){ 
      return;
    }
    let inputTaskData = inputNewTask.value;
    addNewTask(inputTaskData);
    getLocalStorage();
  } 
}

const getInputBtn = function getInputTextOnClick(){
  if(!inputNewTask){
    return;
  }

  let inputTaskData = inputNewTask.value;
  addNewTask(inputTaskData);
  getLocalStorage();
}


inputNewTask.addEventListener('keydown', getInput);
addNewTaskBtn.addEventListener('click', getInputBtn);
