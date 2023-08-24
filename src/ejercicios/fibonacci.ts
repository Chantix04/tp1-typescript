export function Fibonacci(){
    const howMany = document.getElementById('fibonacci') as HTMLInputElement;
    const resultDiv = <HTMLElement>document.getElementById('resultado4');
    
    const num = parseInt(howMany.value);
    const fibo:Array<number> = [0,1];

    if (num<=0){
        return resultDiv.textContent = `Debe ingresar un número que sea mayor a cero.`
    } else { 
        for(let i=2; i<num; i++){
            fibo[i] = fibo[i-1] + fibo[i-2]
        }
    }

    resultDiv.textContent = `La secuencia de Fibonacci hasta ${num} es: ${fibo}`

}