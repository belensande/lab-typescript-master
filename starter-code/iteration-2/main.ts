// Add the reference to the "TodoInterface"
import { TodoInterface } from './todointerface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
	toDoList: Array<string> = [];
	constructor() {}

	addTask(task): number {
		console.log("Inserting " + task);
		return this.toDoList.push(task);
	}

	listAllTasks(): void {
		console.log('Tasks:');
		this.toDoList.forEach(task => { console.log(task); });
	}

	deleteTask(task): number {
		console.log("Deleting " + task);
		this.toDoList = this.toDoList.filter(item => { return item !== task; });
		return this.toDoList.length;
	}
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
