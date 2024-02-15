let toDoList = [];

if (!localStorage.getItem('toDoDB')) {
  localStorage.setItem('toDoDB', JSON.stringify(toDoList));
} else {
  toDoList = JSON.parse(localStorage.getItem('toDoDB'));
}

export { toDoList };