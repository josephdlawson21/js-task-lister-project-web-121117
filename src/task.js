/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, listID) {
      this.description = description
      this.priority = priority
      this.id = id++
      this.listID = listID
      //your code here
    }
  }

})()
