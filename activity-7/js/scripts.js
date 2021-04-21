// array to hold task
var task = [];

// task status 'enun'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// task constructor function
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

// creates a new task element and adds it to the DOM
function addTaskElement (task) {
    // create elements
    var ListEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // set attribute 
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task element to list
    listEl.appendChild(taskEl);
}

// click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        // create a unique id
        var id = 'item-' + task.length;

        // create a new task
        var task= new Task(id, inputEl.value, taskStatus.active);
        taskStatus.push(task);

        // add the task ti the DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

// click handler to complete a task
function completeTask (event) {
    // get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    // find corrisponding task in task array and update status
    for (let i = 0; i < task.length; i ++) {
        const task = task(i);
        if (task.id === id) {
            task.status = taskStatus.completed;
            break;
        }
    }

    // move task element from active list and to completed list
    taskEl.removed();
    document.getElementById(' completed-list').appendChild(taskEl);
}

// key press handler to automatically click the add task button
function clickButton (event) {
    if (event.keycode === 13) {
        document.getElementById('add-task').click();
    }
}

// initializes the app
function init () {
    // wire up the add task button click handler
    document.getElementById('add-task').oneClick = addTask;

    // wire up the task completed list item click handler
    document.getElementById('active-list').oneClick = completeTask;

    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();