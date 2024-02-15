import { getNewTask } from "./src/getNewTask.js";

const tasksList = [];

const inputNewTask = document.querySelector('.add-task-input');
const addNewTaskBtn = document.querySelector('.add-task-btn');

console.log(inputNewTask)

const getInput = function getInputTextOnEnter(e) {
  if (e.keyCode === 13 || e.key === 'Enter'){
    if(!inputNewTask.value.trim()){ 
      return;
    }
    let inputTask = inputNewTask.value;
    console.log(inputTask)
  } 
}

const getInputBtn = function getInputTextOnClick(){
  if(!inputNewTask){
    return;
  }

  let inputTask = inputNewTask.value;
  console.log(inputTask)
}


inputNewTask.addEventListener('keydown', getInput);
addNewTaskBtn.addEventListener('click', getInputBtn);