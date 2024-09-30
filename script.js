let display = document.getElementById("display");

function insert(num) {
    display.innerHTML += num;
    saveToLocalStorage();
}

function calculate(){
    if(display.innerHTML){
        display.innerHTML = eval(display.innerHTML);
        saveToLocalStorage();
    }
}

function clearDisplay(){
    display.innerHTML = "";
    saveToLocalStorage();
}

function deleteLast(){
    display.innerHTML = display.innerHTML.slice(0,-1);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('calculatorDisplay', display.innerHTML);
}

function loadFromLocalStorage(){
    let storedDisplay = localStorage.getItem('calculatorDisplay');
    if(storedDisplay){
        display.innerHTML = storedDisplay;
    }
}

window.onload = loadFromLocalStorage;