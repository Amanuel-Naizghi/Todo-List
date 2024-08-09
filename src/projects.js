import {getProjectName,closeProjectDialog,addProjectDom
        ,getAllRelatedProjectIndex,putAllProjectsToDOM
        ,getTodayProjectIndex,removeAllProjectsAndTodoFromDOM,
        changeHeaderTextToAll,setProjectViewColor,changeProjectBackground,getClickedProjectIndex} from './DOM.js';
import {TodoItems} from './Todo-list.js';
import {generateRandomColor} from './color-view.js';

let projectList=["Personal"];

function addProjects(){
    const projectInput=getProjectName();
    projectList.push(projectInput.value);
    let myColor=generateRandomColor();
    addProjectDom(myColor);
    console.log(projectList);//Just for viewing the project list array in the console
    closeProjectDialog();
}

// function removeProjects(e){
//     const projectIndex=getRemovedProject(e);
//     projectList.splice(projectIndex,1);
//     removeProjectFromDOM(projectIndex);
//     console.log(projectList);//Just for viewing the project list array in the console
//     setNewIndex(); 
// }
//Functions when one of the project list div is clicked and it previews all the todo lists related to the same project in the todo list
function addProjectsToTodoList(e){
    let relatedProjectsIndex=getAllRelatedProjectIndex(e);
    putAllProjectsToDOM(relatedProjectsIndex);
    setProjectViewColor(e);
    changeProjectBackground(e);
    getClickedProjectIndex(e);
}
//Functions when all div is clicked and it displays all projects at the same time in the todo list
function addAllProjectsToTodoList(e){
    let allProjectsList=[];
    for(let i=0;i<TodoItems.length;i++){
        allProjectsList.push(i);
    }
    changeHeaderTextToAll();
    putAllProjectsToDOM(allProjectsList);
    changeProjectBackground(e);
    setProjectViewColor("All");
}

function addTodayProjectsToTodoList(e){
    let todayProjectsIndex=getTodayProjectIndex();
    putAllProjectsToDOM(todayProjectsIndex);
    changeProjectBackground(e);
    setProjectViewColor("Today");
}

//For removing all the projects
function removeAllProjects(){
    projectList.length=1;
    TodoItems.length=0;
    removeAllProjectsAndTodoFromDOM();
    addProjectDom("#DEAC80");
}

export {addProjects,projectList,addProjectsToTodoList,addAllProjectsToTodoList,
        addTodayProjectsToTodoList,removeAllProjects};