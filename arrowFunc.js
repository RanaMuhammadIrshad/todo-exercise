"use strict";
console.log(`--------Arrow function--------`);
/* 
## Create a function declaration called addToDo that takes a STRING as a param and does the following:
- add a task to the taskArr
    - addToDo("grocery");
    - addToDo("feeding cat");
    - addToDo("coding");
- prints out the taskArr
    - E.g [ 'grocery', 'feeding cat', 'coding' ] */
let taskArr2 = [];
const addToDo2 = (str) => {
  taskArr2.push(str);
  console.log(`taskArr2:`, taskArr2);
};
addToDo2("grocery");
addToDo2("feeding cat");
addToDo2("coding");

/*
## Create a function declaration called removeToDo that accepts a STRING and does the following:
- remove a specific task from the taskArr
- prints out the taskArr */

const removeToDo2 = (str) => {
  taskArr2.shift(str);
  console.log(`taskArr2:`, taskArr2);
};
// removeToDo2("grocery");
// removeToDo2("feeding cat");
// removeToDo2("coding");

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
const printTasks2 = () => {
  console.log(`You still have ${taskArr2.length} tasks to complete`);
  for (let i = 0; i < taskArr2.length; i++) {
    console.log(`Task ${i + 1} = ${taskArr2[i]}`);
  }
};
printTasks2();
