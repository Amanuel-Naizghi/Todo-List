import {checkClickedInputAndProjectView,changeProjectViewColor} from './DOM.js';

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

function changeSelectedProjectViewColor(e){
    if(checkClickedInputAndProjectView(e)){
        changeProjectViewColor(e);
    }
}

export {generateRandomColor,changeSelectedProjectViewColor};