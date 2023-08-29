export function ContadorPalabras(){
    const inputPalabras = document.getElementById('texto') as HTMLInputElement;
    const resultDiv = <HTMLElement>document.getElementById('resultado6');

    const texto = inputPalabras.value
    const palabras = texto.trim().split(/\s+/)
    const cantidadPalabras:number = palabras.length

    resultDiv.textContent = `El texto ingresado tiene ${cantidadPalabras} ${cantidadPalabras === 1 ? 'palabra' : 'palabras'}`
}