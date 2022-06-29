document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  const formSubmit = document.querySelector("#create-task-form")
  formSubmit.addEventListener('submit', (event) => {
    // alert("I heard a submit event")
    event.preventDefault();

    const createListItem = () => {
      const userTextBox = document.querySelector("#new-task-description")
      const userText = userTextBox.value
      const li = document.createElement('li')
      li.innerText = userText
      li.setAttribute("class", "highPrio")
      const tasksList = document.querySelector("#tasks")
      tasksList.append(li)
      // adding dropdown
      const dropdown = document.createElement('select')
      dropdown.setAttribute("class", "dropdownMenu")
      li.append(dropdown)
      const highPriority = document.createElement('option')
      highPriority.value = 'high'
      highPriority.innerText = 'High'
      const mediumPriority = document.createElement('option')
      mediumPriority.value = 'medium'
      mediumPriority.innerText = 'Medium'
      const lowPriority = document.createElement('option')
      lowPriority.value = 'low'
      lowPriority.innerText = 'Low'
      dropdown.append(highPriority, mediumPriority, lowPriority)
    }
 
    createListItem();
  
    const changeMenu = document.querySelectorAll('.dropdownMenu');

    changeMenu.addEventListener('change', (event) => {
      console.log("Menu changed")})
    changeMenu.parentElement.className = ""


    })
})
