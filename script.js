// Function for addition
function add() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    let result = Inpt1 + Inpt2;
    document.getElementById("result").textContent = result;
}

// Function for subtraction
function subtract() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    let result = Inpt1 - Inpt2;
    document.getElementById("result").textContent = result
}

// Function for multiplication
function multiply() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    let result = Inpt1 * Inpt2;
    document.getElementById("result").textContent = result
}

// Function for division
function divide() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    if (Inpt2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
    } else {
        let result = Inpt1 / Inpt2;
        document.getElementById("result").textContent = result
    }
}

// Function for modulus
function mod() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    let result = Inpt1 % Inpt2;
    document.getElementById("result").textContent = result
}

// Function for percentage
function percentage() {
    let Inpt1 = Number(document.getElementById("Inpt1").value);
    let Inpt2 = Number(document.getElementById("Inpt2").value);
    let result = (Inpt1 / 100) * Inpt2;
    document.getElementById("result").textContent = result
}
