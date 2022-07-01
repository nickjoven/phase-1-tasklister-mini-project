let taskArray = []
document.addEventListener("DOMContentLoaded", () => {
  // create empty array

  // variable declarations for HTML elements
  const inputTextBox = document.getElementById('new-task-description')
  const inputDateBox = document.getElementById('new-task-due-date')
  const inputPrioBox = document.getElementById('new-task-priority')
  const tasks = document.getElementById('tasks')
  const form = document.getElementById('create-task-form')

  const clearForm = () => {
    inputTextBox.value = ""
    inputDateBox.value = ""
    inputPrioBox.value = ""
  }

  
  // check if description exists
  // if (inputTextBox.value.length == 0) {
    // convert priority selection to precdence value for sorting
    const prioConvert = (inputPrio) => {
      let precedence = 3
      if (inputPrio == "") {
        return precedence
      } else if (inputPrio == "High") {
        precedence = 0
        return precedence
      } else if (inputPrio == "Medium") {
        precedence = 1
        return precedence
      } else if (inputPrio == "Low" ) {
        precedence = 2
        return precedence
      }
    }
    
    // create a function that grabs the values from the HTML elements and stores them,
    // put values in object, push object to array
    
    const inputToArray = () => {
      let inputText = inputTextBox.value
      let inputDate = inputDateBox.value
      let inputPrio = inputPrioBox.value
      const obj = {
        id: taskArray.length + 1,
        text: inputText,
        date: inputDate,
        prio: inputPrio,
        precedence: prioConvert(inputPrio),
    }
    taskArray.push(obj)
  }

  // function to write array object values to list
  
  addNewLi = () => {
    const liNum = taskArray[taskArray.length - 1]
    let liText = liNum.text
    let liDate = liNum.date
    let liPrio = liNum.prio
    let liPrecedence = liNum.precedence
    const li = document.createElement('li')
    li.textContent = liText
    li.classList.add(`${liPrio}`, `${liPrecedence}`)
    tasks.append(li)

  }


  // execute on submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputTextBox.value.length == 0) {
      return  
    } else
      inputToArray(); // store values
      addNewLi(); // add li
      clearForm(); // clear values
  })
})
