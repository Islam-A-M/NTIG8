let showHide = document.querySelector('#showHide')
let data = []
let formHeads = [
    'taskTitle',
     "taskType",
      "taskContent", 
      "startDate", 
      "dueDate"]
showHide.addEventListener('click', function(e){
    document.querySelector('#form-div').classList.toggle('d-none')
    this.textContent == "Show" ? this.textContent='Hide': this.textContent='Show'
})

const writeDataInLocalStorage = ( data ) =>{
    localStorage.setItem('notes', JSON.stringify(data))
}
saveData = (note)=>{
    
    data.push(note)
    writeDataInLocalStorage(data)
    }
document.querySelector('#form-div form').addEventListener('submit', function(e){
    e.preventDefault()
    task = { status:false }
    formHeads.forEach(h => {
            task[h]= this.elements[h].value
    })
    saveData(task)
    console.log(task)
})


test()
