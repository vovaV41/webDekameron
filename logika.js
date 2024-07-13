
window.onload = function(){

    addElement("Text", "t0", "Текст 1", "elements-container");
    addElement("Button", "b0", "Вибор 1", "elements-container");

    addElement("Text", "t1", "Текст 2", "elements-container");
    addElement("Button", "b1", "Вибор 2", "elements-container");

    addElement("Text", "t2", "Текст 3", "elements-container"); 
    addElement("Button", "b2", "Вибор 3", "elements-container");

setImage("background.bmp");
    
addText( "Захочеш найдеш!!!\n 55555");
document.getElementById('b0').addEventListener('click', function() {
    onClick('b0');
});

document.getElementById('b1').addEventListener('click', function() {
    onClick('b1');
});

document.getElementById('b2').addEventListener('click', function() {
   onClick('b2');
});

}

function onClick(id){
    document.getElementById('b0').setAttribute("class","falling-button");
    document.getElementById('b1').setAttribute("class","falling-button");
    document.getElementById('b2').setAttribute("class","falling-button");

}

function setImage(patch){
    var image = document.getElementById("image");
    image.style.backgroundImage="url('"+patch+"')";
    //image.style.display= "none";
  
    
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