
/*   03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
  
  Dica: pesquise por exponentiation operator (**). */


const numbers = [5, 7, 3]

const numberQuadrados = numbers.map(
  number => Math.pow(number,2))

console.log(numberQuadrados)