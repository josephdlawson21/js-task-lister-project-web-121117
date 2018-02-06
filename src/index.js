document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....
  document.querySelector("#create-task-form").style.opacity = 0
});

let listButton = document.querySelector("#submitListName")

listButton.addEventListener('click', () =>{
  event.preventDefault();
  document.querySelector("#create-task-form").style.opacity = 1
  let newList = createListItem(document.querySelector("#new-list-title").value)
  applyListItem(newList)
  createListCard(newList)
})


function createListItem(title) {
  return new List(title)
}

function applyListItem(listItem){
  let dropOption = document.createElement("option")
  dropOption.innerText = listItem.title
  dropOption.data = `${listItem.id}`
  document.querySelector("#parent-list").append(dropOption)
}

function createListCard(listItem){
  document.querySelector("#lists")
  let listDiv = document.createElement("div")
    listDiv.style.class = "list";
  let listTitle = document.createElement("h2")
    listTitle.innerText = listItem.title
  let listTasks = document.createElement("ul")
    listTasks.id = listItem.id
  listDiv.append(listTitle);
  listDiv.append(listTasks);
  document.querySelector("#lists").append(listDiv)
  //add the x button
}

let newTaskButton = document.querySelector("#newTaskButton")

newTaskButton.addEventListener('click', () =>{
  event.preventDefault();
  let parentList= document.querySelector("#parent-list")
  let newTask = createTaskItem(document.querySelector("#new-task-description").value,document.querySelector("#new-task-priority").value, parentList[parentList.selectedIndex].data )
  debugger
  addToUl(newTask, parentList[parentList.selectedIndex].data)
})

function createTaskItem(description,priority){
  return new Task(description,priority)
}

function addToUl(taskObj, listID) {
  let ul = document.getElementById(`${listID}`)
  let lia = document.createElement('li')
  let lib = document.createElement('li')
  lia.innerText = `Task: ${taskObj.description}`
  lib.innerText = `Priority: ${taskObj.priority}`

  ul.append(lia)
  ul.append(lib)
}
