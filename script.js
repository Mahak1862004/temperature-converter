document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;

    if (isNaN(tempInput)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        document.getElementById('result').classList.add('show-result');
        return;
    }

    if (unit === 'C') {
        const fahrenheit = (tempInput * 9/5) + 32;
        const kelvin = tempInput + 273.15;
        result = `${tempInput} °C = ${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'F') {
        const celsius = (tempInput - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${tempInput} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'K') {
        const celsius = tempInput - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${tempInput} K = ${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = result;
    resultElement.classList.add('show-result');
});
