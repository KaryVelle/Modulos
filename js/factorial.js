
export function factorial (numero)
{
  if (typeof numero !== "number") {
    console.error (`"${numero}" no es un número`);
    return
  }
  
  if (!Number.isInteger(numero)) {
    console.warn(`"${numero}" no es entero, se necesitan números enteros.`);
    return;
  }

  if (numero < 0 ){
    console.error (`"${numero}" es negativo, necesito números positivos`);
    return
  }
  
  if (numero === 0 ){
    console.error (`solo puedo usar valores mayores a "${numero}"`);
    return
  }
 
  let T=1;
  for(let i=1; i<=numero; i++){
    console.log(`${T} x ${i} `)
    T= T*i;
    console.log (`=${T}`)
  }
  
  console.log  (` El factorial de "${numero}" es "${T}" `);
}