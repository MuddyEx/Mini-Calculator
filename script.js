function calculate(calculation) {

    // Get the input values
    
    const num1 = Number(document.getElementById('input1').value);
    const num2 = Number(document.getElementById('input2').value);
    let result;


    if (calculation === '+') {
        result = num1 + num2;
    } else if (calculation === '-') {
        result = num1 - num2;
    } else if (calculation === '*') {
        result = num1 * num2;
    } else if (calculation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Cannot divide by zero';
        }
    } else if (calculation === '%') {
        result = (num1 / 100) * num2; 
    } else if (calculation === 'mod') {
        result = num1 % num2; 
    }

    // Display the result
    document.getElementById('result').textContent = `Result: ${result}`;
}
