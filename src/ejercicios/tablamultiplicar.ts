export function Multiplicar(){
    // Seleccionar elementos del DOM
    const num1Input = document.getElementById("numMultiplicar") as HTMLInputElement;
    const howMany = document.getElementById("howManyTimes") as HTMLInputElement;
    const resultDiv = <HTMLElement>document.getElementById("resultado3");
  
      const num1 = parseFloat(num1Input.value);
      const howManyTimes = parseInt(howMany.value)
      let result: string | Array<number | string>;
      let arrayResult:Array<number | string>;
      arrayResult = []
  
      if (howManyTimes == 0 || howManyTimes <0) {
         result = "Debe ingresar un número de veces que sea mayor a cero."
      } else { 
        for (let i=0; i<howManyTimes; i++){
            arrayResult[i]= num1 * (i+1);
        }
        result = arrayResult
        console.log(result)
      }
  
      resultDiv.textContent = `Resultado: ${result}`;
  
  }