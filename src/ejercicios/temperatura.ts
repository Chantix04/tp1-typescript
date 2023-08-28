export function Convertidor (){
    const temperature = document.getElementById('temperature') as HTMLInputElement;
    const convertSelect = document.getElementById('convertSelect') as HTMLSelectElement;
    const resultDiv = <HTMLElement>document.getElementById('resultado5')

    const num = parseFloat(temperature.value);
    const convertTo = convertSelect.value;
    switch (convertTo) {
        case "Celsius": 
            let resultCelsius:number;
            resultCelsius = (num-32)*(5/9)
            resultDiv.textContent = `Convertido de ${num}° Fahrenheit a ${resultCelsius.toFixed(2)}° Celsius`
            break;
        case "Fahrenheit":
             let resultFahrenheit:number; 
             resultFahrenheit = (num*(9/5)) + 32;
             resultDiv.textContent = `Convertido de ${num} Celsius a ${resultFahrenheit.toFixed(2)} Fahrenheit`
             break;
        default: 
        resultDiv.textContent = `Operación inválida.`
    }
}