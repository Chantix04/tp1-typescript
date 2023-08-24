export function Convertidor (){
    const temperature = document.getElementById('temperature') as HTMLInputElement;
    const convertSelect = document.getElementById('convertSelect') as HTMLSelectElement;
    const resultDiv = <HTMLElement>document.getElementById('resultado5')

    const num = parseFloat(temperature.value);
    const convertTo = convertSelect.value;
    switch (convertTo) {
        case "Celsius": 
            let result:number;
            result = (num-32)*(5/9)
            resultDiv.textContent = `Convertido de ${num}° Fahrenheit a ${result}° Celsius`
    }
}