import './style.css';
import addIconSmall from './images/add-small.png';
import addIconLarge from './images/add-large.png';
import {addProjects,addProjectsToTodoList,addAllProjectsToTodoList,
        addTodayProjectsToTodoList,removeAllProjects} from './projects.js';
import {addProjectsToSelectBox,addTodoList,removeTodoItem
        ,checkboxAction,TodoEditAction,updateTodoInfo,addProjectsToSelectBox2} from './Todo-list.js';
import {addProjectDom} from './DOM.js';
import {changeSelectedProjectViewColor} from './color-view.js';

let addProjToSelBoxContr=true;
let addProjToSelBoxContr2=true;

const addContainer=document.querySelector(".add-icon-small");
const addIconSmallImage=new Image();
addIconSmallImage.src=addIconSmall;
addContainer.appendChild(addIconSmallImage);

const addContainerLarge=document.querySelector(".add-icon-large");
const addIconLargeImage=new Image();
addIconLargeImage.src=addIconLarge;
addContainerLarge.appendChild(addIconLargeImage);

addProjectDom("#DEAC80");//Used for initially putting the Personal project in the project list
addAllProjectsToTodoList();//Used for initially selection the all projects

addIconSmallImage.addEventListener('click',()=>{
    document.querySelector('#my-dialog').show();
});

//Used for hiding dialogs when user clicks outside of the dialog boxes

let myDialog=document.querySelector('#my-dialog');
let myDialog2=document.querySelector('#my-dialog2');
let myDialog3=document.querySelector('#my-dialog3');
document.addEventListener('click',(e)=>{
    if(!myDialog.contains(e.target)&&myDialog.open&&!addIconSmallImage.contains(e.target)){
        document.querySelector('#my-form').reset();
        myDialog.close();
    }
    else if(!myDialog2.contains(e.target)&&myDialog2.open&&!addIconLargeImage.contains(e.target)){
        document.querySelector('#my-form2').reset();
        myDialog2.close();
    }
    else if(!myDialog3.contains(e.target)&&myDialog3.open){
        myDialog3.close();
    }
});

//Used for adding the project from the dialog submitted to the project list

document.querySelector("#my-form").addEventListener('submit',(e)=>{
    e.preventDefault;
    addProjects();
    addProjToSelBoxContr=true;
});

document.addEventListener('click',function(e){
    // const target=e.target.closest("#remove-icon>img");//For removing items from the list of projects
    const target2=e.target.closest("#remove-icon2>img");//For removing items in the todo list
    const target3=e.target.closest('.project-list>div>span');//After one of the project list div is clicked

    // if((target)){
    //     removeProjects(e);
    // }
    if(target2){
        removeTodoItem(e);
    }
    else if(target3){
        addProjectsToTodoList(e);
    }
});
//Used when all projects is clicked for showing the all todo lists 
document.querySelector('.all-projects>.all').addEventListener('click',(e)=>{
    addAllProjectsToTodoList(e);
});
//Used when today projects is clicked for showing the all todo lists that are for today
document.querySelector('.today-projects>.today').addEventListener('click',(e)=>{
    addTodayProjectsToTodoList(e);
});
//Used when reset projects button is clicked
document.querySelector('.reset-projects>button').addEventListener('click',()=>{
    removeAllProjects();
});
//For adding action listener when a color input is changed by the projects
document.querySelector('#all').addEventListener('input',(e)=>{
    changeSelectedProjectViewColor(e);
});

document.querySelector('#today').addEventListener('input',(e)=>{
    changeSelectedProjectViewColor(e);
});

document.querySelector('.project-list').addEventListener('input',(e)=>{
    changeSelectedProjectViewColor(e);
})
//Todo-list module

addIconLargeImage.addEventListener('click',()=>{
    document.querySelector('#my-dialog2').show();
    if(addProjToSelBoxContr){
        addProjectsToSelectBox();
        addProjToSelBoxContr=false;
    }
});

document.querySelector("#my-form2").addEventListener('submit',(e)=>{
    e.preventDefault;
    addTodoList();
});

document.addEventListener('click',function(e){
    const checkboxClick=e.target.closest('.myCheckbox');
    const TodoEdit=e.target.closest('.Todo-list>div>div>img');
    let todoEditClicked=false;

    if(checkboxClick){
        checkboxAction(e);
    }
    else if(TodoEdit){//After one of the todo list edit image is clicked
        TodoEditAction(e);
        if(addProjToSelBoxContr2){
            addProjectsToSelectBox2();
            addProjToSelBoxContr2=false;
        }
        todoEditClicked=true;
    }
    document.querySelector("#my-form3").addEventListener('submit',()=>{
        e.preventDefault;
        if(todoEditClicked){
            updateTodoInfo(e);
            todoEditClicked=false;
        }
    });
})
