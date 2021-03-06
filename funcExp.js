"use strict";
console.log(`--------Function expression--------`);
/* 
## Create a function declaration called addToDo that takes a STRING as a param and does the following:
- add a task to the taskArr
    - addToDo("grocery");
    - addToDo("feeding cat");
    - addToDo("coding");
- prints out the taskArr
    - E.g [ 'grocery', 'feeding cat', 'coding' ] */
let taskArr1 = [];
const addToDo1 = function (str) {
  taskArr1.push(str);
  console.log(`taskArr1:`, taskArr1);
};
addToDo1("grocery");
addToDo1("feeding cat");
addToDo1("coding");

/* 
## Create a function declaration called removeToDo that accepts a STRING and does the following:
- remove a specific task from the taskArr
- prints out the taskArr */

const removeToDo1 = function (str) {
  taskArr1.shift(str);
  console.log(`taskArr1:`, taskArr1);
};
// removeToDo1("grocery");
// removeToDo1("feeding cat");
// removeToDo1("coding");

/* 
## Delete all the above console logs.
## Create a function declaration called "printTasks" that takes 0 parameters and prints out:
- number of tasks in the array 
- full description of tasks to complete 

Example:
You still have 2 tasks to complete
Task 1 = "some task"
Task 2 = "some other task"

The function has to be dynamic (has to work regardless of how many tasks are present in the array) */
// let myArr = ['Task 1 = "some task"', 'Task 2 = "some other task"'];
const printTasks1 = function () {
  console.log(`You still have ${taskArr1.length} tasks to complete`);
  for (let i = 0; i < taskArr1.length; i++) {
    console.log(`Task ${i + 1} = ${taskArr1[i]}`)
  }
};
printTasks1();
