/* Робота з файлами */
var steps = "0";
var textStory = "null";

function read_steps(step) {
    fetch('story/' + step)
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
    
    addElement("Button", "b0", '', "chose", false);
    addElement("Button", "b1", '', "chose", false);
    addElement("Button", "b2", '', "chose", false);

    const buttonB0 = document.getElementById('b0');
    const buttonB1 = document.getElementById('b1');
    const buttonB2 = document.getElementById('b2');

    if (buttonB0) {
        buttonB0.addEventListener('click', function() {
            steps += "0";
            onClick('b0');
        });
    }
    if (buttonB1) {
        buttonB1.addEventListener('click', function() {
            steps += "1";
            onClick('b1');
        });
    }
    if (buttonB2) {
        buttonB2.addEventListener('click', function() {
            steps += "2";
            onClick('b2');
        });
    }

    read_steps(steps);
    checkAndSetImage();
    
}

function onClick(id) {
    document.getElementById('b0').setAttribute("class", "falling-button");
    document.getElementById('b1').setAttribute("class", "falling-button");
    document.getElementById('b2').setAttribute("class", "falling-button");

  
    read_steps(steps);
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
    const imagePath = `story/${steps}.jpg`;
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
