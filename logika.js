
/* робота з файлами */
var steps= "0";
function read_steps(){


fetch('story/0')
.then(response => response.text())
.then(data => {
    document.getElementById('text').textContent = data;
})
.catch(error => {
    console.error('Error fetching the file:', error);
    document.getElementById('text').textContent = 'Не вдалося завантажити файл.';
});



}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){

    read_steps();
    addElement("Button", "b0", "Начать истерически кричать, звать на помощь", "chose",true);
    addElement("Button", "b1", "попробовать ориентироваться в лесу", "chose", true);
    addElement("Button", "b2", "сходить посрать за дерево забів лопухов", "chose", true);

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

        if(id == "b1"){document.getElementById(id).innerText ="Нашел кента и начал трахать его";}
        if(id == "b0"){document.getElementById(id).innerText ="сорвал голос и обосрался";}
        if(id == "b2"){document.getElementById(id).innerText ="Хищники нашли тебя и скушали";}
}

function setImage(patch, visible){
    var image = document.getElementById("image");
    image.src = patch;
   if(visible == true){
    image.style.display= "block";
   }else{
    image.style.display= "none";
}}


function addElement( element, id, text, perent, visible) {
    var newElement = document.createElement(element);
    newElement.innerText = text;
    newElement.setAttribute('id', id);

    if(visible == true){
        newElement.style.display = "block";
    }else{
        newElement.style.display = "none";
}
    document.getElementById(perent).appendChild(newElement);

}

function addText(text){
    document.getElementById("text").innerText =text;
    
}