document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value)
    form.reset()
  })

});

function buildToDo (todo) {
// create a p element
// add the value (argument for buildToDo) into the text content for that p element
// append that p element as a child of the form
// build an 'x' button, and append that as a child of the p element
const p = document.createElement('p')
const btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
p.textContent = `${todo} `
btn.textContent = 'x'
// console.log(document.querySelector('#new-task-description').value)
document.querySelector('#list').appendChild(p)
p.appendChild(btn)
}

function handleDelete(e) {
e.target.parentNode.remove()
}

