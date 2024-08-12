import {getProjectColor,changeColorForAllAndTodayProject,addProjectDom} from './DOM.js';
import {projectList} from './projects.js';
import {TodoItems} from './Todo-list.js';

export let loadingFromLS=false;
//Used for saving the project list,todo list and colors after every update is made on either one of them
function saveProjectColorAndTodo(){
    let saveProject=(projectData)=>{
        localStorage.setItem('projectList',JSON.stringify(projectData));
        saveColor();
    };

    let saveTodo=(todoData)=>{
        localStorage.setItem('todoList',JSON.stringify(todoData));
        saveColor();
    };

    let saveColor=()=>{
        let colorArray=[]
        colorArray=getProjectColor();
        localStorage.setItem('colorList',JSON.stringify(colorArray));
    };

    return{saveProject,saveTodo,saveColor,};
}
//For loading the project list, todo list and colors when the website is closed or restarted
function loadProjectColorAndTodo(){

    let loadProjects=()=>{
        projectList.length=0;
        let myArray=JSON.parse(localStorage.getItem('projectList'));
        myArray.forEach(item=>{
            projectList.push(item);
        });
        let myColorList=JSON.parse(localStorage.getItem('colorList'));
        let colorCounter=2;
    //Loading project list items and placing them to the DOM
        changeColorForAllAndTodayProject();
        projectList.forEach((item)=>{
            loadingFromLS=true;
            addProjectDom(myColorList[colorCounter],item);
            colorCounter+=1;
        });
        loadingFromLS=false;
    };
    //Loading TodoItems array with the previously filled todoItems from local storage
    let loadTodoList=()=>{
        let myArray=JSON.parse(localStorage.getItem('todoList'));
        myArray.forEach(item=>{
            TodoItems.push(item);
        });
    }

    return {loadProjects,loadTodoList};
}

export {saveProjectColorAndTodo,loadProjectColorAndTodo};