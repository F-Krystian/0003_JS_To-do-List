const saveToDoList = function (todoList){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

const getToDoList = function () {
  let storedToDoList = localStorage.getItem('todoList');
  
  if(!storedToDoList) {
    storedToDoList = [];
  } else {
    storedToDoList = JSON.parse(storedToDoList);
  }

  return storedToDoList;
}

const clearToDoListStorage = function () {
  localStorage.removeItem('todoList');
}

export { saveToDoList, getToDoList , clearToDoListStorage }