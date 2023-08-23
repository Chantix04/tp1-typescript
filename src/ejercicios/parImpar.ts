export function parImpar(){
    const numInput = document.getElementById('contParImpar') as HTMLInputElement;
    const resultDiv = <HTMLLIElement> document.getElementById("resultado2")

    const num = parseFloat(numInput.value)

    if (isNaN(num)){
        resultDiv.textContent = "Por favor, ingrese un número válido";
        return
    }
    let cantidadPares = 0;
    let cantidadImpares = 0;

    for(let numero = 1; numero<=num; numero++){
        if(numero % 2 === 0 ){
            cantidadPares++;
        } else{
            cantidadImpares++
        }
    }
    resultDiv.textContent = `Cantidad de números pares: ${cantidadPares}
    Cantidad de impares: ${cantidadImpares}`;
}