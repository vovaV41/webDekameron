
window.onload = function(){

    addElement("Button", "b0", "Начать истерически кричать, звать на помощь", "chose");
    addElement("Button", "b1", "попробовать ориентироваться в лесу", "chose");
    addElement("Button", "b2", "сходить посрать за дерево забів лопухов", "chose");

setImage("background.bmp", true);

    addText( "ты видишь перед собой лес, понимаешь что ты лунатик");

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
    if(id=="b0")
    alert("сорвал голос и обосрался");
        if(id == "b1")
            alert("Нашел кента и начал трахать его");
        if(id == "b2")
            alert("Хищники нашли тебя и скушали");

}

function setImage(patch, visible){
    var image = document.getElementById("image");
    image.src = patch;
   if(visible == true){
    image.style.display= "block";
   }else{
    image.style.display= "none";
}}


function addElement( element, id, text, perent) {
    var newElement = document.createElement(element);
    newElement.innerText = text;
    newElement.setAttribute('id', id);
    document.getElementById(perent).appendChild(newElement);
}

function addText(text){
    document.getElementById("text").innerText =text;
    
}