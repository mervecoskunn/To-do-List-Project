//Global Selectors
const form = document.querySelector("addTaskForm");
const input = document.getElementById("#txtTaskName");
const btnDeleteAll = document.querySelector("btnDeleteAll");
const taskList =document.getElementById("#task-list");
let items;

//EventListeners

eventListeners();

function eventListeners(){
    // form submit event

    form.addEventListener("submit",addNewItem);

}
function addNewItem(e){
    e.preventDefault();

    if(input.value===''){
        alert('please type a task!');
        return;
    }
    const li =document.createElement('li');
    li.className= 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a= document.createElement('a');
    a.classList ='delete-item float-end'
    a.setAttribute('href','#');
    a.innerHTML= '<i class="bi bi-x-circle"></i>'

    li.appendChild(a);
    taskList.appendChild(li);



}