var toDoList = [];
function addTask(task) {
    console.log("Inserting " + task);
    return toDoList.push(task);
}
function listAllTasks() {
    console.log('Tasks:');
    toDoList.forEach(function (task) { return console.log(task); });
}
function deleteTask(task) {
    console.log("Deleting " + task);
    toDoList = toDoList.filter(function (item) { return item !== task; });
    return toDoList.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
