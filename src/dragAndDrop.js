const sortItems = function() {
  const column = document.querySelector('.todo__display-tasks-box');

  new Sortable(column, {
    group: "shared",
    animation: 150,
    ghostClass: "blue-background-class"
  });  
}

export {sortItems};
