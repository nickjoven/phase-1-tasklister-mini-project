const taskArray = []
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  const formSubmit = document.querySelector("#create-task-form")
  formSubmit.addEventListener('submit', (event) => {
    // alert("I heard a submit event")
    event.preventDefault();
    
    const userTextBox = document.querySelector("#new-task-description")
    const userText = userTextBox.value
    const userObject = {
      id: taskArray.length,
      textEntered: userText,
      priority: "High",
    }

    const addToArray = () => {
      taskArray.push(userObject)
    }

    addToArray();

    const createListFromArray = () => {
      const li = document.createElement('li')
      li.innerText = userObject.textEntered
      li.setAttribute("id", userObject.id + 1)
      li.className = "highPrio"
      const tasksList = document.querySelector("#tasks")
      tasksList.append(li)
      const dropdown = document.createElement('select')
      dropdown.setAttribute("class", `dropdownMenu`)
      li.append(dropdown)
      const highPriority = document.createElement('option')
      highPriority.value = 'highPrio'
      highPriority.innerText = 'High'
      const mediumPriority = document.createElement('option')
      mediumPriority.value = 'medPrio'
      mediumPriority.innerText = 'Medium'
      const lowPriority = document.createElement('option')
      lowPriority.value = 'lowPrio'
      lowPriority.innerText = 'Low'
      dropdown.append(highPriority, mediumPriority, lowPriority)
     }

    createListFromArray();
    
    addEventListener('change', (event) => {
      let changedBlock = event.target
      // console.log(changedBlock)
      if (changedBlock.classList.contains("dropdownMenu")) {
        // console.log("please look at me")
        // console.log(event.target.value)
        let parentLi = changedBlock.parentElement
        let idNum = parseInt(parentLi.id)
        // console.log(typeof(idNum))
        // console.log(idNum)
        let arrayNum = ((parseInt(idNum)) - 1)
        if (changedBlock.value !== parentLi.id) {
          taskArray[arrayNum].priority = changedBlock.value
          // console.log(taskArray[arrayNum].priority)
          // console.log(changedBlock.value)
          changedBlock.parentElement.className = ""
          changedBlock.parentElement.className = `${changedBlock.value}`
        }
      }





    })
    // const createListItem = () => {
    //   const userTextBox = document.querySelector("#new-task-description")
    //   const userText = userTextBox.value
      // const li = document.createElement('li')
      // li.innerText = userText
    //   li.setAttribute("class", "highPrio")
    //   const tasksList = document.querySelector("#tasks")
    //   tasksList.append(li)
    //   // adding dropdown
      // const dropdown = document.createElement('select')
      // dropdown.setAttribute("class", "dropdownMenu")
      // li.append(dropdown)
      // const highPriority = document.createElement('option')
      // highPriority.value = 'high'
      // highPriority.innerText = 'High'
      // const mediumPriority = document.createElement('option')
      // mediumPriority.value = 'medium'
      // mediumPriority.innerText = 'Medium'
      // const lowPriority = document.createElement('option')
      // lowPriority.value = 'low'
      // lowPriority.innerText = 'Low'
      // dropdown.append(highPriority, mediumPriority, lowPriority)
    // }
 
//     createListItem();
  
//     const changeMenu = document.querySelector('.dropdownMenu');

//     changeMenu.addEventListener('change', (event) => {
//       console.log("Menu changed")})
//     changeMenu.parentElement.className = ""


})
})
