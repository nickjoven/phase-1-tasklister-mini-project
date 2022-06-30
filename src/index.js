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
      priority: "highPrio",
    }

    const addToArray = () => {
      taskArray.push(userObject)
    }

    addToArray();

    const createListFromArray = () => {
      const li = document.createElement('li')
      li.innerText = userObject.textEntered
      li.setAttribute("id", userObject.id + 1)
      const tasksList = document.querySelector("#tasks")
      tasksList.append(li)
      const dropdown = document.createElement('select')
      dropdown.setAttribute("id", `dropdownMenu${userObject.id + 1}`)
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

    createListFromArray();
    
    addEventListener('change', (event) => {
      // console.log("Menu changed")
      console.log(event.target.value)
      let num = (parseInt(event.target.parentElement.id) - 1)
      if (typeof (num) == 'number') {
        let useNum = num + 1
        console.log(taskArray[num])

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
