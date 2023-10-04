export class Pentagono {
    constructor(lados, lado, apotema) {
      this.lados = lados;
      this.lado = lado;
      this.apotema = apotema;
       if (typeof lados !== "number" || typeof lado !== "number") {
      return console.error(`Alguno de los datos no son números`);
       }
    }
  
    getPerimetro() {
      
      return this.lados * this.lado;
    }
  
    getArea() {
      return (this.getPerimetro() * this.apotema) / 2;
    }
  }