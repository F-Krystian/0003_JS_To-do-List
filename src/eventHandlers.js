import { addToDoTask , deleteToDoTask , editToDoTask , checkToDotask} from "./todoList.js";

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
  const toDoListContainer = document.querySelector('.todo__display-tasks-box');
// Add event listener to the todo list container 
  toDoListContainer.addEventListener('click', (e) =>{
    const editBtn = e.target.closest('.todo__edit-btn');
    if(editBtn) {
      editToDoTask(editBtn);
    }
  })
}



const handleDeleteTask = function() {

  const toDoListContainer = document.querySelector('.todo__display-tasks-box');
// Add event listener to the todo list container
  toDoListContainer.addEventListener('click', (e) =>{
    const deleteBtn = e.target.closest('.todo__delete-btn');
    if(deleteBtn){
      deleteToDoTask(deleteBtn);
    }
  })

}

const handleToggleTask = function() {
  const toDoListContainer = document.querySelector('.todo__display-tasks-box');
// Add event listener to the todo list container
  toDoListContainer.addEventListener('click', (e) => {
    const checkBtn = e.target.closest('.todo__display__item-check');
    if(checkBtn){
      checkToDotask(checkBtn);
    }
  })
}

export { 
  handleAddTask, 
  handleEditTask, 
  handleDeleteTask,
  handleToggleTask
}