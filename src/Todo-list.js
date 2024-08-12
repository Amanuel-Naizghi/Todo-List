import {projectList,addAllProjectsToTodoList,addTodayProjectsToTodoList} from './projects.js';
import {addProListToSelBox,getDialogValues,addTodoDom,closeTodoDialog,getRemovedTodo
       ,removeTodoFromDOM,setNewIndexTodo,getClickedCheckbox,makeAction,checkDialogOpenOrClose
       ,openTodoDialogForEditing,updateArrayData,updateDOM,addProListToSelBox2,checkProjectMatches,
       checkProjectMatches2} from './DOM.js';
import {saveProjectColorAndTodo} from './local-storage.js';

let TodoItems=[];
//For adding the project list into the select box
function addProjectsToSelectBox(){
    console.log(projectList);
    addProListToSelBox(projectList);
}
//For adding todo list to the todo list box
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
    saveProjectColorAndTodo().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//This function removes removes todo item from the todo list box
function removeTodoItem(e){
    let todoIndex=getRemovedTodo(e);
    TodoItems.splice(todoIndex,1);
    removeTodoFromDOM(todoIndex);
    console.log(TodoItems);//Just for viewing todoItems array in the console
    setNewIndexTodo();
    saveProjectColorAndTodo().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//Action taken when check box is checked or unchecked
function checkboxAction(e){
    let checkboxClicked=getClickedCheckbox(e);
    makeAction(checkboxClicked);
    saveProjectColorAndTodo().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//For showing the edit dialog after the edit todo list is clicked
function TodoEditAction(e){
    if(checkDialogOpenOrClose){
        openTodoDialogForEditing(e);
    }
}
//For updating the edited todo list
function updateTodoInfo(e){
    updateArrayData(e);
    console.log(TodoItems);
    if(checkProjectMatches2(e)){
        updateDOM(e);
    }
    saveProjectColorAndTodo().saveTodo(TodoItems);//For saving the TodoItems array in the local storage
}
//Used for adding the projects to the project select box of the edit dialog
function addProjectsToSelectBox2(){
    addProListToSelBox2(projectList);
}

export {addProjectsToSelectBox,addTodoList,TodoItems,removeTodoItem
       ,checkboxAction,TodoEditAction,updateTodoInfo,addProjectsToSelectBox2};