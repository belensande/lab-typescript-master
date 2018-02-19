"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(toDoList) {
        this.toDoList = toDoList;
    }
    Todo.prototype.addTask = function (task) {
        console.log("Inserting " + task);
        return this.toDoList.push(task);
    };
    Todo.prototype.listAllTasks = function () {
        console.log('Tasks:');
        this.toDoList.forEach(function (task) { return console.log(task); });
    };
    Todo.prototype.deleteTask = function (task) {
        console.log("Deleting " + task);
        this.toDoList = this.toDoList.filter(function (item) { return item !== task; });
        return this.toDoList.length;
    };
    return Todo;
}());
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
