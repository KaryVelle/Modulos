export class Cuadrado {
    constructor(lados, lado) {
      this.lados=lados;
      this.lado = lado;
  
       if (typeof lados !== "number" || typeof lado !== "number") {
      return console.error(`Alguno de los datos no son números`);
       }
    }
  
    getPerimetro() {
      return this.lados * this.lado;
    }
  
    getArea() {
      return Math.pow(this.lado, 2);
    }
  }