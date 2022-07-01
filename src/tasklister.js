const taskArray = []
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  const formSubmit = document.querySelector("#create-task-form")
  const userTextBox = document.querySelector("#new-task-description")
  const tasksList = document.querySelector("#tasks")
  const dueDateBox = document.querySelector("#new-task-due-date")

  formSubmit.addEventListener('submit', (event) => {
    // alert("I heard a submit event")
  event.preventDefault();
  const userText = userTextBox.value
  const userDate = dueDateBox.value
  const [year, month, day] = userDate.split('-');
  const fixedDate = [month, day, year].join('/');
  const userObject = {
  id: taskArray.length,
    textEntered: userText,
    priority: "highPrio",
    precedence: 0,
    dueDate: fixedDate
  }

  const addToArray = () => {
    taskArray.push(userObject)
    userTextBox.value = null
  }
  
  addToArray();

  const createListFromArray = () => {
    const li = document.createElement('li')
    li.innerText = userObject.textEntered
    li.setAttribute("id", userObject.id + 1)
    li.className = "highPrio"
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
    //
    const removeBtn = document.createElement('button')
    removeBtn.className = removeBtn
    removeBtn.innerText = "X"
    removeBtn.addEventListener('click', (event) => {
      event.target.parentElement.remove()
    })
    li.append(removeBtn)
    const dueDateText = document.createElement('p')
    if (userObject.dueDate != '//') {
      dueDateText.innerText = `Due ${userObject.dueDate}`
    } else dueDateText.innerText = "Due Whenever"
    li.prepend(dueDateText)
    //
    const editBtn = document.createElement('button')
    editBtn.className = editBtn
    editBtn.innerText = "edit"
    editBtn.onclick = () => {
      li.contentEditable = !li.isContentEditable
      if (editBtn.innerText === "edit") {
        editBtn.innerText = "save"
      } else editBtn.innerText = "edit"
  }  
    li.append(editBtn)
  }

    createListFromArray();
    dueDateBox.value = null
  })

  addEventListener('change', (event) => {
    let changedBlock = event.target
    if (changedBlock.classList.contains("dropdownMenu")) {
      // console.log("please look at me")
      let parentLi = changedBlock.parentElement
      let idNum = parseInt(parentLi.id)
      let arrayNum = ((parseInt(idNum)) - 1)
      let currentArray = taskArray[arrayNum]
      if (changedBlock.value !== parentLi.id) {
        currentArray.priority = changedBlock.value
        changedBlock.parentElement.className = ""
        changedBlock.parentElement.className = `${changedBlock.value}`
        if (changedBlock.value == 'highPrio') {
          currentArray.precedence = 0
        } else if (changedBlock.value == 'medPrio') {
          currentArray.precedence = 1
        } else if (changedBlock.value == 'lowPrio')
          currentArray.precedence = 2
      }
    }
  })

  
  
  
  // sort functionality
  const sortBtn = document.querySelector("#sortBtn")

  sortBtn.addEventListener('click', (event) => {
    taskArray.sort((a, b) => {
      return a.precedence - b.precedence;
    })
    // console.log(taskArray)
    
    const entireList = document.querySelector("#tasks")
    // const listItems = document.querySelectorAll("#myList li")

    while (entireList.hasChildNodes()) {
      entireList.removeChild(entireList.lastChild)
    }

    taskArray.map((element, index) => {
      let li = document.createElement('li')
      const liText = taskArray[index].textEntered
      // console.log(taskArray[index])
      li.innerText = liText
      tasksList.append(li)
      li.className = taskArray[index].priority
      li.setAttribute("id", parseInt(index + 1))
      //
      const dropdown = document.createElement('select')
      let dropdownClass = `dropdownMenu`
      dropdown.setAttribute("class", dropdownClass )
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
      //
      li.className = taskArray[index].priority
      if (taskArray[index].priority == 'highPrio') {
        highPriority.setAttribute("selected", "High")
      } else if (taskArray[index].priority == 'medPrio') {
        mediumPriority.setAttribute("selected", "Medium")
      } else if (taskArray[index].priority == 'lowPrio') {
        lowPriority.setAttribute("selected", "low")
      }
      //
      const removeBtn = document.createElement('button')
      removeBtn.setAttribute("id", "removeBtn")
      removeBtn.innerText = "X"
      removeBtn.addEventListener('click', (event) => {
        event.target.parentElement.remove()
      })
      li.append(removeBtn)
      const dueDateText = document.createElement('p')
      if (taskArray[index].dueDate != '//') {
        dueDateText.innerText = `Due ${taskArray[index].dueDate}`
      } else dueDateText.innerText = "Due Whenever"
      li.prepend(dueDateText)
    })
  


  })
})
