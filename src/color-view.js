import {checkClickedInputAndProjectView,changeProjectViewColor} from './DOM.js';
import {saveProjectColorAndTodo} from './local-storage.js';
//This function generates a random color for the newly created projects
function generateRandomColor(){
    const letters="123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    if(color==="#000000"){
        generateRandomColor();
    }
    return color;
}
//Changes the color of the selected project after the color is edited
function changeSelectedProjectViewColor(e){
    if(checkClickedInputAndProjectView(e)){
        changeProjectViewColor(e);
    }
    saveProjectColorAndTodo().saveColor();
}

export {generateRandomColor,changeSelectedProjectViewColor};