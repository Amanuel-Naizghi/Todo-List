import {projectList,addAllProjectsToTodoList,addTodayProjectsToTodoList} from './projects.js';
import {addProListToSelBox,getDialogValues,addTodoDom,closeTodoDialog,getRemovedTodo
       ,removeTodoFromDOM,setNewIndexTodo,getClickedCheckbox,makeAction,checkDialogOpenOrClose
       ,openTodoDialogForEditing,updateArrayData,updateDOM,addProListToSelBox2,checkProjectMatches,
       checkProjectMatches2} from './DOM.js';

let TodoItems=[];

function addProjectsToSelectBox(){
    addProListToSelBox(projectList);
}

function addTodoList(){
    let todoInputs=getDialogValues();
    TodoItems.push(todoInputs);
    let myIndex=TodoItems.length-1;
    if(checkProjectMatches()){//used for checking the input project given match's with the actual project selected while adding new todo item
        addTodoDom(myIndex);
    }
    else if(checkProjectMatches()==="All"){
        addAllProjectsToTodoList();
    }
    else if(checkProjectMatches()==="Today"){
        addTodayProjectsToTodoList();
    }
    console.log(TodoItems);//Just for viewing todoItems array in the console
    closeTodoDialog();
}

function removeTodoItem(e){
    let todoIndex=getRemovedTodo(e);
    TodoItems.splice(todoIndex,1);
    removeTodoFromDOM(todoIndex);
    console.log(TodoItems);//Just for viewing todoItems array in the console
    setNewIndexTodo();
}

function checkboxAction(e){
    let checkboxClicked=getClickedCheckbox(e);
    makeAction(checkboxClicked);
}

function TodoEditAction(e){
    if(checkDialogOpenOrClose){
        openTodoDialogForEditing(e);
    }
}

function updateTodoInfo(e){
    updateArrayData(e);
    console.log(TodoItems);
    if(checkProjectMatches2(e)){
        updateDOM(e);
    }
}

function addProjectsToSelectBox2(){
    addProListToSelBox2(projectList);
}

export {addProjectsToSelectBox,addTodoList,TodoItems,removeTodoItem
       ,checkboxAction,TodoEditAction,updateTodoInfo,addProjectsToSelectBox2};