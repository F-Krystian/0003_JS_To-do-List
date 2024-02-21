# ToDo List App
This project is a simple ToDo list application built using HTML, CSS, and JavaScript. It utilizes browser's local storage to persist data and is modularized into separate JavaScript files for better organization and maintainability.

## Features
Add new tasks to the list  
Check off completed tasks  
Edit existing tasks  
Delete tasks  
Update local storage with changes  
Display all tasks on the UI  


## Modules
1. app.js  
Orchestrates the interaction between modules
Initializes the application by loading tasks from local storage and displaying them on the UI
Calls event handler functions to handle user interactions
2. storage.js  
Handles storing and retrieving tasks from local storage
Provides functions to save, load, and clear tasks from local storage
3. todoList.js  
Manages the operations related to the ToDo list
Provides functions to add, delete, edit, and toggle tasks
Updates the local storage and UI based on changes
4. eventHandlers.js  
Handles user interactions such as adding, editing, deleting, and toggling tasks
Contains event listener functions for various UI elements
5. todoUI.js  
Renders the ToDo list on the UI
Provides functions to display, clear, and update the UI with task data

