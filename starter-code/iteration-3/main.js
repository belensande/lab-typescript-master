"use strict";
exports.__esModule = true;
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    TodoItem.prototype.toogleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.toDoList = [];
    }
    TodoList.prototype.addTask = function (task) {
        console.log("Inserting " + task);
        var toDoItem = new TodoItem(task);
        return this.toDoList.push(toDoItem);
    };
    TodoList.prototype.listAllTasks = function () {
        console.log('Tasks:');
        this.toDoList.forEach(function (task) { console.log(task.title + " " + task.updatedAt); });
    };
    TodoList.prototype.deleteTask = function (task) {
        console.log("Deleting " + task);
        this.toDoList = this.toDoList.filter(function (item) { return item.title !== task; });
        return this.toDoList.length;
    };
    TodoList.prototype.listUncomplete = function () {
        console.log('Uncomplete:');
        this.toDoList.forEach(function (task) {
            if (!task.status) {
                console.log(task.title + " " + task.updatedAt);
            }
        });
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
