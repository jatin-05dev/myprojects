
let display = document.getElementById('display');
function appendValue(val) {
    if (display.innerHTML === "0") {
        display.innerHTML = val;
    } else {
        display.innerHTML += val;
    }
}
function clearDisplay() {
    display.innerText = "0";
}

function backspace() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    }
    else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "not valid";
    }
}
