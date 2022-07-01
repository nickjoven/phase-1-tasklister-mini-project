let taskArray = []
document.addEventListener("DOMContentLoaded", () => {
  // create empty array

  // variable declarations for HTML elements
  const inputTextBox = document.getElementById('new-task-description')
  const inputDateBox = document.getElementById('new-task-due-date')
  const inputPrioBox = document.getElementById('new-task-priority')
  const form = document.getElementById('create-task-form')

  const clearForm = () => {
    inputTextBox.value = ""
    inputDateBox.value = ""
    inputPrioBox.value = ""
  }

  let inputText = inputTextBox.value
  let inputDate = inputDateBox.value
  let inputPrio = inputPrioBox.value


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

  // create a function that grabs the values from the HTML elements and stores them
  // put values in object, push object to array

  const inputToArray = () => {
    const obj = {
      id: taskArray.length + 1,
      text: inputText,
      date: inputDate,
      prio: inputPrio,
      precedence: prioConvert(inputPrio),
    }
    taskArray.push(obj)
  }

  // execute on submit
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputToArray(); // store values
    clearForm(); // clear values
    }
  )    
})
