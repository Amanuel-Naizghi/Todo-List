import {projectList} from './projects.js';
import editIconImage from './images/edit.png';
import removeIconImage from './images/remove.png';
import {TodoItems} from './Todo-list.js';
import {loadingFromLS}  from './local-storage.js';

let projectCounter=0;
let projectClicked=false;
let todoCounter=0;
let previousProjSelected="";
let todayDate;
//Retrieves the project name given while creating a new project
function getProjectName(){
    const projectInput=document.querySelector('#project-name');
    return projectInput;
}
//It gets the index of the todo item where the delete button is clicked
function getRemovedProject(e){
    let clickedParentContainer=e.target.parentNode;
    let clickedParentContainerIndex=clickedParentContainer.parentNode.getAttribute('data-index');
    return clickedParentContainerIndex;
}

// function removeProjectFromDOM(index){
//     let selector= `.project-list>[data-index="${index}"]`;
//     let itemToRemove=document.querySelector(selector);
//     document.querySelector('.project-list').removeChild(itemToRemove);
// }

function setNewIndex(){
    projectCounter=0;
    let myNodeList=document.querySelectorAll('.project-list>div')
    myNodeList.forEach((item)=>{
        item.setAttribute('data-index',projectCounter);
        projectCounter+=1;
    })
}

function closeProjectDialog(){
    const projectDialog=document.querySelector('#my-dialog');
    document.querySelector('#my-form').reset();
    projectDialog.close();
}

function addProjectDom(color,projectName){
    
    const projectContainer=document.querySelector('.project-list');
    const newProjectContainer=document.createElement('div');

    const newColorInput=document.createElement('INPUT');
    const newProjectName=document.createElement('span');
    
    newProjectContainer.setAttribute('data-index',`${projectCounter}`);
    newColorInput.setAttribute('type','color');
    newColorInput.setAttribute('value',color);
    newColorInput.setAttribute('id',`color-input${projectCounter}`);
    newColorInput.setAttribute('class','myColorInput');

    if(!loadingFromLS){
        newProjectName.textContent=`${projectList[projectList.length-1]}`;
    }
    else{
        newProjectName.textContent=`${projectName}`;
    }

    newProjectContainer.appendChild(newColorInput);
    newProjectContainer.appendChild(newProjectName);
    projectContainer.appendChild(newProjectContainer);

    projectCounter+=1;
}
//Finds the index of all todo items with the same project name
function getAllRelatedProjectIndex(e){
    let relatedProjectList=[];
    let clickedProjectIndex=e.target.parentNode.getAttribute('data-index');
    let clickedProjectName=document.querySelector(`.project-list>[data-index="${clickedProjectIndex}"]>span`).textContent;
    document.querySelector('.project-view>h1').textContent=clickedProjectName;
    TodoItems.map((item,index)=>{
        if(item.project===clickedProjectName){
            relatedProjectList.push(index);
        }
    });
    return relatedProjectList;
}
//Adds all todo items into the DOM when all projects is clicked
function putAllProjectsToDOM(myArray){
    todoCounter=0;
    projectClicked=true;
    document.querySelector('.Todo-list').innerHTML="";
    myArray.forEach(item=>{
        addTodoDom(item);
    });
    projectClicked=false;
}
//Retrieves the index of all projects with the same date 
function getTodayProjectIndex(){
    document.querySelector('.project-view>h1').textContent="Today"

    let todayArrayIndex=[];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    todayDate=today;
    TodoItems.map((item,index)=>{
        if(item.date===today){
            todayArrayIndex.push(index);
        }
    });
    return todayArrayIndex;
}
//Clears all projects from the DOM
function removeAllProjectsAndTodoFromDOM(){
    document.querySelector('.Todo-list').innerHTML="";
    document.querySelector('.project-list').innerHTML="";
}

function changeHeaderTextToAll(){
    document.querySelector('.project-view>h1').textContent="All";
}

function changeProjectBackground(e){
    //The if else clauses is used for removing the project background of the previously clicked project and setting background for the clicked project
    if(previousProjSelected==="All"){
        document.querySelector(".all-projects>p").style.background="";
        e.target.style.background="#40534C";
    }
    else if(previousProjSelected==="Today"){
        document.querySelector(".today-projects>p").style.background="";
        e.target.style.background="#40534C";
    }
    else if(previousProjSelected===""){
        document.querySelector(".all-projects>p").style.background="#40534C";
    }
    else{
        let previousProject;
        if(e.target.textContent==="All"||e.target.textContent==="Today"){
            previousProject=document.querySelector(".project-list").children[previousProjSelected].children[1];
            previousProject.style.background="";
            e.target.style.background="#40534C";
        }
        else{
            previousProject=e.target.parentNode.parentNode.children[previousProjSelected].children[1];
            previousProject.style.background="";
            e.target.style.background="#40534C";
        }
    }
}

function getClickedProjectIndex(e){
    previousProjSelected=e.target.parentNode.getAttribute('data-index');
}
//Checks whether the input of the project name is the same as the currently opened project 
function checkClickedInputAndProjectView(e){
    if(e.target.parentNode.children[1].textContent===document.querySelector(".project-view>h1").textContent){
        return true;
    }
}
//Used for changing the color of the project view same as the color selected by the currently selected project list color input
function changeProjectViewColor(e){
    document.querySelector(".project-view").style.background=e.target.value;
}
//For loading the previously selected color from the local storage
function changeColorForAllAndTodayProject(){
    let colorArray=JSON.parse(localStorage.getItem('colorList'));
    document.querySelector('#all').value=colorArray[0];
    document.querySelector('#today').value=colorArray[1];
}

//Todo-list module DOM
//Adds the list of projects into the select box of the dialog used for creating a new project
function addProListToSelBox(projectList){
    let select=document.querySelector('#todo-project');
    select.innerHTML="";
    projectList.forEach(item=>{
        let option=document.createElement('option');
        option.value=item;
        option.innerHTML=item;
        select.appendChild(option);
    })
}
//Retrieves the input given by the user from the dialog box
function getDialogValues(){
    let TodoObject={};
    TodoObject.todoName=document.querySelector('#todo-name').value;
    TodoObject.date=document.querySelector('#todo-date').value;
    TodoObject.priority=document.querySelector('#todo-priority').value;
    TodoObject.status=document.querySelector('#todo-status').value;
    TodoObject.project=document.querySelector('#todo-project').value;
    return TodoObject;
}
//Closes the dialog for creating a new todo after the user fill and submit the add dialog box
function closeTodoDialog(){
    const TodoDialog=document.querySelector('#my-dialog2');
    document.querySelector('#my-form2').reset();
    TodoDialog.close();
}
//Adds new todo item and its components into the DOM
function addTodoDom(index){
    const TodoContainer=document.querySelector('.Todo-list');
    const newTodoContainer=document.createElement('div');

    const TodoCheck=document.createElement('input');
    TodoCheck.type='checkbox';
    TodoCheck.setAttribute('class',`myCheckbox`);

    if(!projectClicked){
        newTodoContainer.setAttribute('data-index',`${todoCounter}`);
        TodoCheck.setAttribute('data-index',`${todoCounter}`);
    }
    else{
        newTodoContainer.setAttribute('data-index',`${index}`);
        TodoCheck.setAttribute('data-index',`${index}`);
    }

    const TodoName=document.createElement('label');
    TodoName.for = todoCounter;

    const TodoDate=document.createElement('span');
    const TodoPriority=document.createElement('span');
    const TodoStatus=document.createElement('span');
    const newEditIcon=document.createElement('div');
    const newRemoveIcon=document.createElement('div');
//Used for strick through the label and date when the status is complete and vise versal
    if(TodoItems[index].status==="Completed"){
        TodoName.textContent=`${TodoItems[index].todoName.split('').map(char => char + '\u0336').join('')}`;
        TodoDate.textContent=`${TodoItems[index].date.split('').map(char => char + '\u0336').join('')}`;
        TodoPriority.textContent=`${TodoItems[index].priority}`;
        TodoStatus.textContent=`${TodoItems[index].status}`;
        TodoCheck.checked=true;
        TodoStatus.style.background="green";
    }
    else{
        TodoName.textContent=`${TodoItems[index].todoName}`;
        TodoDate.textContent=`${TodoItems[index].date}`;
        TodoPriority.textContent=`${TodoItems[index].priority}`;
        TodoStatus.textContent=`${TodoItems[index].status}`;
    }
//Applies background color to the priority
    if(TodoItems[index].priority==="Medium"){
        TodoPriority.style.background="#FF9A00";
    }
    else if(TodoItems[index].priority==="High"){
        TodoPriority.style.background="red";
    }

    const editIcon=new Image();
    editIcon.src=editIconImage;
    newEditIcon.setAttribute('id','edit-icon');
    newEditIcon.appendChild(editIcon);

    const removeIcon=new Image();
    removeIcon.src=removeIconImage;
    newRemoveIcon.setAttribute('id','remove-icon2');
    newRemoveIcon.appendChild(removeIcon);

    newTodoContainer.appendChild(TodoCheck);
    newTodoContainer.appendChild(TodoName);
    newTodoContainer.appendChild(TodoDate);
    newTodoContainer.appendChild(TodoPriority);
    newTodoContainer.appendChild(TodoStatus);
    newTodoContainer.appendChild(newEditIcon);
    newTodoContainer.appendChild(newRemoveIcon);

    TodoContainer.appendChild(newTodoContainer);

    todoCounter+=1;
}
//gets the specific index of the  todo item div after the delete icon is clicked
function getRemovedTodo(e){
    return getRemovedProject(e);
}

function removeTodoFromDOM(index){
    let selector= `.Todo-list>[data-index="${index}"]`;
    let itemToRemove=document.querySelector(selector);
    document.querySelector('.Todo-list').removeChild(itemToRemove);
}

function setNewIndexTodo(){
    todoCounter=0;
    let myNodeList=document.querySelectorAll('.Todo-list>div')
    myNodeList.forEach((item)=>{
        item.setAttribute('data-index',todoCounter);
        todoCounter+=1;
    })
}

function getClickedCheckbox(e){
    let clickedCheckBox=e.target;
    return clickedCheckBox;
}
//Used when a check box is checked or unchecked
function makeAction(checkboxClicked){
    let parentContainerIndex=checkboxClicked.parentNode.getAttribute('data-index');
    let myLabel=document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent;
    let myDate=document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent;

    if(checkboxClicked.checked){
        let strikethroughLabel=myLabel.split('').map(char => char + '\u0336').join(''); 
        let strikethroughDate=myDate.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=strikethroughLabel;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=strikethroughDate;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent="Completed";
        TodoItems[parentContainerIndex].status="Completed";
        checkboxClicked.parentNode.children[4].style.background="green";
    }
    else{
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=myLabel.replace(/[\u0336]/g, '');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=myDate.replace(/[\u0336]/g, '');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent="Not Started";
        TodoItems[parentContainerIndex].status="Not Started";
        checkboxClicked.parentNode.children[4].style.background="";
    }
}
//Checks whether all the dialogues are open or closed
function checkDialogOpenOrClose(){
    if(!document.querySelector('#my-dialog').open&&!document.querySelector('#my-dialog2').open){
        return true;
    }
}
//Opens the edit dialog and it adds the previous values to it
function openTodoDialogForEditing(e){
    let TodoDialog=document.querySelector('#my-dialog3');
    TodoDialog.show();

    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');

    document.querySelector('#todo-name-update').value=TodoItems[parentContainerIndex].todoName;
    document.querySelector('#todo-date-update').value=TodoItems[parentContainerIndex].date;
    document.querySelector('#todo-priority-update').value=TodoItems[parentContainerIndex].priority;
    document.querySelector('#todo-status-update').value=TodoItems[parentContainerIndex].status;   
    document.querySelector('#todo-project-update').value=TodoItems[parentContainerIndex].project;  
}
//Updates the todo items data from the edited dialogue
function updateArrayData(e){
    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    TodoItems[parentContainerIndex].todoName=document.querySelector('#todo-name-update').value;
    TodoItems[parentContainerIndex].date=document.querySelector('#todo-date-update').value;
    TodoItems[parentContainerIndex].priority=document.querySelector('#todo-priority-update').value;
    TodoItems[parentContainerIndex].status=document.querySelector('#todo-status-update').value;
    TodoItems[parentContainerIndex].project=document.querySelector('#todo-project-update').value;
}

function updateDOM(e){
    const parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    let todoName=TodoItems[parentContainerIndex].todoName;
    let todoDate=TodoItems[parentContainerIndex].date;
    let todoPriority=TodoItems[parentContainerIndex].priority;
    let todoStatus=TodoItems[parentContainerIndex].status;
//Used for strick through the label and date when the status is complete and vise versal
    if(todoStatus==="Completed"){
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=todoName.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=todoDate.split('').map(char => char + '\u0336').join('');
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[3].textContent=todoPriority;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent=todoStatus;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[0].checked=true;
        e.target.parentNode.parentNode.children[4].style.background="green";
    }
    else{
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[1].textContent=todoName;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[2].textContent=todoDate;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[3].textContent=todoPriority;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[4].textContent=todoStatus;
        document.querySelector(`.Todo-list>[data-index="${parentContainerIndex}"]`).children[0].checked=false;
        e.target.parentNode.parentNode.children[4].style.background="";
    }
//Applies background color to the priority
    if(todoPriority==="Medium"){
        e.target.parentNode.parentNode.children[3].style.background="#FF9A00";
    }
    else if(todoPriority==="High"){
        e.target.parentNode.parentNode.children[3].style.background="red";
    }
    else{
        e.target.parentNode.parentNode.children[3].style.background="";
    }

    const editDialog=document.querySelector('#my-dialog3');
    editDialog.close();
}
//Adds the project list to the select box of the edit dialogue
function addProListToSelBox2(projectList){
    let select=document.querySelector('#todo-project-update');
    select.innerHTML="";
    projectList.forEach(item=>{
        let option=document.createElement('option');
        option.value=item;
        option.innerHTML=item;
        select.appendChild(option);
    })
}
//used for checking the input project given match's with the actual project selected while adding new todo item
function checkProjectMatches(){
    if( document.querySelector('.project-view>h1').textContent===TodoItems[TodoItems.length-1].project){
        return true;
    }
    else if(document.querySelector('.project-view>h1').textContent==="All"){
        return "All";
    }
    else if(document.querySelector('.project-view>h1').textContent==="Today"){
        return "Today";
    }
}
//used for checking the input project given match's with the actual project selected while editing todo item
function checkProjectMatches2(e){
    let parentContainerIndex=e.target.parentNode.parentNode.getAttribute('data-index');
    if(document.querySelector('.project-view>h1').textContent===TodoItems[parentContainerIndex].project){
        return true;
    }
    else if(document.querySelector('.project-view>h1').textContent===previousProjSelected&&previousProjSelected!="Today"){
        return true;
    }
    else if(previousProjSelected==="Today"&&todayDate===TodoItems[parentContainerIndex].date){
        return true;
    }
    else{
        document.querySelector('.Todo-list').removeChild(e.target.parentNode.parentNode);
    }
    document.querySelector('#my-dialog3').close();
}

//Setting the project view color

function setProjectViewColor(e){
    let myProjectView=document.querySelector(".project-view");
    if(e==="All"){
        myProjectView.style.background=document.querySelector("#all").value;
        previousProjSelected="All";
    }
    else if(e==="Today"){
        myProjectView.style.background=document.querySelector("#today").value;
        previousProjSelected="Today";
    }
    else{
        let myColor=e.target.parentNode.children[0].value;
        myProjectView.style.background=myColor;
    }
}

//For getting all the project colors

function getProjectColor(){
    let myColorArray=[];
    let allProjectColor=document.querySelector("#all").value;
    let todayProjectColor=document.querySelector("#today").value;
    myColorArray.push(allProjectColor);
    myColorArray.push(todayProjectColor);
    let projectNodeList=document.querySelectorAll(".project-list>div");
    projectNodeList.forEach(item=>{
        myColorArray.push(item.children[0].value);
    });
    return myColorArray;
}

export {getProjectName,closeProjectDialog,addProjectDom,setNewIndex
        ,addProListToSelBox,getDialogValues,getAllRelatedProjectIndex,putAllProjectsToDOM
        ,getTodayProjectIndex,removeAllProjectsAndTodoFromDOM,changeHeaderTextToAll,changeProjectBackground,
        getClickedProjectIndex,checkClickedInputAndProjectView,changeProjectViewColor,changeColorForAllAndTodayProject
        ,closeTodoDialog,addTodoDom,getRemovedTodo,removeTodoFromDOM,setNewIndexTodo,getClickedCheckbox,makeAction,
        checkDialogOpenOrClose,openTodoDialogForEditing,updateArrayData,updateDOM,addProListToSelBox2,checkProjectMatches
        ,checkProjectMatches2,setProjectViewColor,getProjectColor};