function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid Expression");
    }
}

/* Keyboard Support */
document.addEventListener("keydown", function (event) {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        display.value += key;
    }
    else if (key === "Enter") {
        calculateResult();
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});