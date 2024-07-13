
window.onload = function(){

    addElement("Text", "t1", "Текст 1", "elements-container");
    addElement("Button", "b1", "Вибор 1", "elements-container");

    addElement("Text", "t2", "Текст 2", "elements-container");
    addElement("Button", "b2", "Вибор 2", "elements-container");

    addElement("Text", "t3", "Текст 3", "elements-container"); 
    addElement("Button", "b3", "Вибор 3", "elements-container");
    
addText( "Захочеш найдеш!!!\n 55555");
}




function addElement( element, id, text, perent) {
    var newElement = document.createElement(element);
    newElement.innerText = text;
    newElement.setAttribute('id', id);
    document.getElementById(perent).appendChild(newElement);
}

function addText(text){
    document.getElementById("text").innerText =text;
    
}