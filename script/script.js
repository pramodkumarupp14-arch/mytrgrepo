let isDegree = true;

const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function toggleMode() {
    isDegree = !isDegree;
    document.getElementById("modeBtn").innerText = isDegree ? "DEG" : "RAD";
}

/* DEG → RAD conversion */
function toRad(x) {
    return isDegree ? (x * Math.PI / 180) : x;
}

/* SAFE math functions */
function sin(x) {
    return Math.sin(toRad(x));
}

function cos(x) {
    return Math.cos(toRad(x));
}

function tan(x) {
    return Math.tan(toRad(x));
}

/* FINAL SAFE EVALUATION */
function calculateResult() {
    try {
        let expr = display.value;

        // IMPORTANT: expose only safe functions
        const result = Function(
            "sin",
            "cos",
            "tan",
            "return " + expr
        )(sin, cos, tan);

        display.value = result;

    } catch (e) {
        display.value = "Error";
    }
}

/* Keyboard support */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", ".", "(", ")"].includes(key)) {
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