import { Calculadora } from "./ejercicios/calculadora";
import { parImpar } from "./ejercicios/parImpar";
import { Multiplicar } from "./ejercicios/tablamultiplicar";
import { Fibonacci } from "./ejercicios/fibonacci";
import { Convertidor } from "./ejercicios/temperatura";
import { ContadorPalabras } from "./ejercicios/palabras";

document.addEventListener("DOMContentLoaded", ()=>{
  const btnCalcular = document.getElementById("calculate");

  btnCalcular?.addEventListener("click", () => Calculadora())
})

document.addEventListener("DOMContentLoaded", ()=>{
  const btnParImpar = document.getElementById("btnParImpar")

  btnParImpar?.addEventListener("click", ()=> parImpar())
})
document.addEventListener("DOMContentLoaded", ()=>{
  const btnMultiplicar = document.getElementById("btnMultiplicar")

  btnMultiplicar?.addEventListener("click", ()=> Multiplicar())
})
document.addEventListener("DOMContentLoaded", ()=>{
  const fibonacci = document.getElementById("btnFibonacci")

  fibonacci?.addEventListener("click", ()=> Fibonacci())
})
document.addEventListener("DOMContentLoaded", ()=>{
  const temperatura = document.getElementById("btnTemperatura");

  temperatura?.addEventListener("click", ()=> Convertidor())
})
document.addEventListener("DOMContentLoaded", ()=>{
  const palabras = document.getElementById("btnPalabras");

  palabras?.addEventListener("click", ()=> ContadorPalabras())
})