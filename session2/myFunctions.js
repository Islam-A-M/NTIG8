tasks = null
myAddForm = document.querySelector('#form-div form')
let showHide = document.querySelector('#showHide')
form_div = document.querySelector('#form-div')
p = document.querySelector('#content-wrapper')
isEdit=false;
currentEditIndex=null;
const getAllTasks = ( ) =>{
    try { 
        tasks = JSON.parse(localStorage.getItem('tasks')) || []
        if(!Array.isArray(tasks)) throw new Error()
     }
    catch(e) { tasks = [] }
}
const createCustomElements = function(parent, elementTag, classes, textContent, attributes){
    myNewElement = document.createElement(elementTag)
    myNewElement.classList = classes
    myNewElement.textContent = textContent
    attributes.forEach(attr=>{
        myNewElement.setAttribute(attr.attrName, attr.attrValue)
    })
    parent.appendChild(myNewElement)
    return myNewElement
}
changeStatus = (index) =>{
    let allDivs = document.querySelectorAll('.x')
    allDivs[index].classList.toggle('bg-warning')
    allDivs[index].classList.toggle('bg-primary')
    tasks[index].status = !tasks[index].status
    saveAllTasks(tasks)
} 
showSingleTask = (element, i)=>{
    const mainDiv = createCustomElements(p, 'div', 'col-4 p-3 y', '', []) 
    const mainDiv2 = createCustomElements(mainDiv, 'div', 'border border-3 border-primary m-3 p-3 x', '', []) 
    element.status? mainDiv2.classList.add('bg-warning'):mainDiv2.classList.add('bg-primary');
    createCustomElements(mainDiv2,'h3','',element.taskTitle, [])
    createCustomElements(mainDiv2,'span','',element.taskType, [])
    createCustomElements(mainDiv2,'p','',element.taskContent, [])
    btn1 = createCustomElements(mainDiv2,'button','btn btn-danger mx-2','delete', [])
    btn1.addEventListener('click', function(e){ deletebtn(element.ind, e)})
    btn2 = createCustomElements(mainDiv2,'button','btn btn-warning mx-2','edit', [])
    btn2.addEventListener('click', function(e){ editTaskBtnEvent(element.ind,e)})
    btn3 = createCustomElements(mainDiv2,'button','btn btn-primary mx-2','change status', [])
    btn3.addEventListener('click', function(e){ changeStatus(i) })
}


showAllTasks = () =>{
    p.innerHTML = ""
tasks.forEach((element, i) => {
showSingleTask(element, i)
});
}
getAllTasks()
showAllTasks()
saveAllTasks = ( ) =>{
    console.log('from save')
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
deletebtn = (ind, e) =>{
    (e.target.parentNode).parentNode.remove()
    tasks = tasks.filter(el=> el.ind!=ind)
   saveAllTasks(tasks)

}

addTask = (task) =>{
    tasks.length == 0 ? task.ind = 0: task.ind = tasks[tasks.length-1].ind+1;
  //  console.log(task.ind)
//    task.ind = tasks.length
    tasks.push(task)
    saveAllTasks()
    myAddForm.reset()
    form_div.classList.add('d-none')
    showHide.textContent="Show"
    showSingleTask(task, tasks.length-1)
}
editTaskBtnEvent = (ind,e) => {
    
        //set values on form
        formHeads.forEach((formKey)=>{
           // console.log(formKey,tasks[ind][formKey])
            myAddForm.elements[formKey].value=tasks[ind][formKey]

        })
    //change button title and functionality 

    myAddForm.elements["submitFormBtn"].textContent="Save Changes"

form_div.classList.toggle('d-none')
showHide.textContent="Hide"
    isEdit=true;
    currentEditIndex=ind
}

editTask = (editedObj) => {
let allDivs = document.querySelectorAll('.x')

editedObj.ind= currentEditIndex
console.log(editedObj.ind)
tasks[currentEditIndex]=editedObj
saveAllTasks()
myAddForm.reset()
form_div.classList.add('d-none')
showHide.textContent="Show"
console.log(allDivs);

showAllTasks()
isEdit=false;
currentEditIndex=null
myAddForm.elements["submitFormBtn"].textContent="add Task"

}