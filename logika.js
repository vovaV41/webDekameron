/* Робота з файлами */
var steps = "0";
var nameStory = "";
var textStory = "null";
var ver = 1; 


function read_steps(step) {
if(sessionStorage.getItem("selectName") ==null)
    location.href = "list.html";

    fetch('story/' +sessionStorage.getItem("selectName") +"/"+ step)
        .then(response => {
            if (!response.ok) {
                throw new Error('Файл не знайдено');
            }
            return response.text();
        })
        .then(data => {
            // Оновлюємо textStory та DOM тут
            const textStory = data; // Локальна змінна textStory
            var arrayData = splitText(textStory);

            // Оновлюємо DOM з урахуванням можливих порожніх рядків
            document.getElementById('text').textContent = arrayData[0] || '';

            editElement("b0", arrayData[1] || '', !!arrayData[1]);
            editElement("b1", arrayData[2] || '', !!arrayData[2]);
            editElement("b2", arrayData[3] || '', !!arrayData[3]);
        })
        .catch(error => {
            // Відображаємо повідомлення про помилку
            const textStory = ";)"; // Локальна змінна textStory
            console.error('Error fetching the file:', error);
            document.getElementById('text').textContent = textStory;
        });
}

function splitText(text) {
    // Розділяємо текст на частини за допомогою регулярного виразу, що відповідає шаблону "цифри***"
    const parts = text.split(/\d+\*\*\*/).filter(Boolean);
    // Оновлюємо масив, видаляючи зайві зірочки з кінця кожного рядка
    return parts.map(part => part.trim().replace(/\*\*\*$/, ''));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function() {
    
    if(sessionStorage.getItem("selectName") ==null)
        location.href= "list.html"


    addElement("Button", "b0", '', "chose", false);
    addElement("Button", "b1", '', "chose", false);
    addElement("Button", "b2", '', "chose", false);

    const buttonB0 = document.getElementById('b0');
    const buttonB1 = document.getElementById('b1');
    const buttonB2 = document.getElementById('b2');
    const blist = document.getElementById("blist");
    const bdelete = document.getElementById("bdelete");
    const bug = document.getElementById("bug");

    buttonB0?.addEventListener('click', function() {
        handleButtonClick(buttonB0, '0');
    });
    buttonB1?.addEventListener('click', function() {
        handleButtonClick(buttonB1, '1');
    });
    buttonB2?.addEventListener('click', function() {
        handleButtonClick(buttonB2, '2');
    });
    bdelete?.addEventListener('click', function(){
            clickButton(1);
        });
    blist?.addEventListener('click', function(){
            clickButton(2);
            });
    bug?.addEventListener('click', function(){
                clickButton(3);
                });



    read_steps(localStorage.getItem(sessionStorage.getItem("selectName")));
    checkAndSetImage();
    
}
function clickButton(numbButton){
    switch(numbButton){
case 1 :{
    if(confirm("Delete steps?")){
    localStorage.setItem(sessionStorage.getItem("selectName"),'0');
    sessionStorage.removeItem("selectName");
    location.reload(true);}
    break;
}
case 2:{
    location.href = "list.html";
    sessionStorage.removeItem("selectName");
    break;
}
case 3:{
    editElement("b0","",false);
    editElement("b1","",false);
    editElement("b2","",false);
    setImage("",false);

    if(document.getElementById("b3") == null)
    addElement("Button", "b3", 'Копировать и выйти', "chose", true);

    document.getElementById("b3").addEventListener("click", function(){
        navigator.clipboard.writeText("xxx-xxx-xxx");
        location.reload();
    });

    addText("Привет, юный друг. Я разработчик SHARATA. "+
        " Здесь не будет реклами, поэтому,"+
        " если вы хотите поддержать проект, я продолжу.\n\n"+
" Ваши данные не собираются и не хранятся");
    break;
}
    }

}

function handleButtonClick(button, step) {
    button.classList.add('animate');
    button.addEventListener('animationend', function() {
        button.classList.remove('animate');
        
        var tmpStep = localStorage.getItem(sessionStorage.getItem("selectName"));
        tmpStep += step;
        localStorage.setItem(sessionStorage.getItem("selectName"),tmpStep);

        read_steps(localStorage.getItem(sessionStorage.getItem("selectName")));
        checkAndSetImage();
    }, { once: true });
}

function onClick() {
    read_steps(localStorage.getItem(sessionStorage.getItem("selectName")));
    checkAndSetImage();    
}


function addElement(element, id, text, parent, visible) {
    var newElement = document.createElement(element);
    newElement.innerText = text;
    newElement.setAttribute('id', id);

    if (visible) {
        newElement.style.display = "block";
    } else {
        newElement.style.display = "none";
    }
    document.getElementById(parent).appendChild(newElement);
}

function editElement(id, text, visible) {
    var element = document.getElementById(id);
    if (element) {
        element.innerText = text;
        if (visible) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function addText(text) {
    document.getElementById("text").innerText = text;
}

async function checkAndSetImage() {

if(sessionStorage.getItem("selectName") == null)
    location.href = "list.html";

    const imagePath = 'story/'+
    sessionStorage.getItem("selectName")+"/"+
    localStorage.getItem(sessionStorage.getItem("selectName"))
    +'.jpg';
    console.warn(imagePath);

    try {
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok) {
            setImage(imagePath, true);
        } else {
            setImage("background.bmp", false);
        }
    } catch (error) {
        setImage("background.bmp", false);
    }
}

// Допоміжна функція `setImage`
function setImage(imagePath, isVisible) {
    const imgElement = document.getElementById('image');
    imgElement.src = imagePath;
    imgElement.style.display = isVisible ? 'block' : 'none';
}
