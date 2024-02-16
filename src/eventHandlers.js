import { addToDoTask } from "./todoList.js";

const handleAddTask = function() {
  const inputText = document.querySelector('.add-task-input');
  const inputTextBtn = document.querySelector('.add-task-btn');

  inputText.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter') {
      let inputData = inputText.value; 
      // console.log(inputData);
      addToDoTask(inputData);
      inputText.value = "";      
    }

  })

  inputTextBtn.addEventListener('click', () =>{
    let inputData = inputText.value; 
    // console.log(inputData);
    addToDoTask(inputData);
    inputText.value = "";
  })
}

const handleEditTask = function() {
  console.log('Edit')
}

const handleDeleteTask = function() {
  console.log('Delete')
}

const handleToggleTask = function() {
  console.log('Toggle')
}

export { 
  handleAddTask, 
  handleEditTask, 
  handleDeleteTask,
  handleToggleTask
}