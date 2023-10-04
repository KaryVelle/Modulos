export class triangulo {
    constructor(lados, ladoA, ladoB, ladoC, altura) {
    this.lados = lados;
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
    this.altura = altura;

       if (typeof lados !== "number" || typeof ladoA !== "number" || typeof ladoB !== "number" || typeof ladoC !== "number" || typeof altura !== "number") {
    return console.error(`Alguno de los datos no son números`);
     }
    }
  
  getPerimetro() {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  getArea() {
    return (this.ladoB * this.altura) / 2;
  }
}