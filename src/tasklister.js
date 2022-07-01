document.addEventListener("DOMContentLoaded", () => {
 // create empty array
  let taskArray = []

  const inputText = document.getElementById('new-task-description')

  const inputDate = document.getElementById('new-task-due-date')

  const inputPrio = document.getElementById('new-task-priority')


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
    
  const inputPrecdence = prioConvert(inputPrio)

  const addInput = () => {
    const taskObj = {
      text: inputText,
      date: inputDate,
      priority: inputPrio,
      precedence: inputPrecdence
    }
  }
})
