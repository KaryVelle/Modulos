import { factorial } from "./js/factorial.js";
import { reloj } from "./js/reloj.js";
import { triangulo } from "./js/triangulo.js";
import { Cuadrado } from "./js/cuadrado.js";
import { Pentagono } from "./js/poligonos.js";


console.log (factorial(16));

setInterval(function(){
    reloj();
  }, 1000); 
  
  let miTriangulo = new triangulo(3, 4, 3, 3, 6);
  console.log(`El perímetro de mi triángulo es ${miTriangulo.getPerimetro()}`);
  console.log(`El área de mi triángulo es ${miTriangulo.getArea()}`);
  
  let miCuadrado = new Cuadrado(7, 8);
  console.log(`El perímetro de mi cuadrado es ${miCuadrado.getPerimetro()}`);
  console.log(`El área de mi cuadrado es ${miCuadrado.getArea()}`);
  
  let miPentagono = new Pentagono(5, 2, 9);
  console.log(`El perímetro de mi pentágono es ${miPentagono.getPerimetro()}`);
  console.log(`El área de mi pentágono es ${miPentagono.getArea()}`);