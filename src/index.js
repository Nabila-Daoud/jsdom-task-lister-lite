document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks') 
  taskForm.addEventListener('submit', function(e) { 
    e.preventDefault();
   const newTask = document.querySelector('#new-task-description')
   const taskItem = document.createElement('li')
  
   
  const spanText = document.createElement('span')
   spanText.innerHTML = newTask.value
   taskItem.appendChild (spanText)
   
   const btn = document.createElement('button')
   btn.innerText = 'x'
   taskItem.appendChild (btn)
   btn.addEventListener('click', function (){ 
     taskItem.remove()

   })

   const btnEdit = document.createElement('button')
   btnEdit.innerText = 'edit'
   taskItem.appendChild (btnEdit)
   btnEdit.addEventListener('click', function (){ 
    spanText.innerHTML = newTask.value
   
   })
   taskList.appendChild(taskItem)
   
  } )

});

function deleteTask(){
  const taskList = document.querySelector('#tasks') 
  const taskItem = document.createElement('li')
  taskList.removeChild(taskList) 

}
