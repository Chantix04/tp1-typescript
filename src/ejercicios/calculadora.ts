export function Calculadora(){
    // Seleccionar elementos del DOM
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const operationSelect = document.getElementById("operation") as HTMLSelectElement;
    const resultDiv = <HTMLElement>document.getElementById("result");
  
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);
      const operation = operationSelect.value;
      let result: number | string;
  
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          if (num2 !==0){
            result = num1 / num2;
  
          }else{
            result = "no se puede dividir por 0"
          }
          break;
        default:
          result = "Operación inválida";
      }
  
      resultDiv.textContent = `Resultado: ${result}`;
  
  }