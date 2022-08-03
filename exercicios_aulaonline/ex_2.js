/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbers = crazyNumbers.reduce((accumulator, crazyNumber)=> crazyNumber <501 ? accumulator +1: accumulator, 0)// tem que colocar o zero, para setar o 1 valor do accumulator em zero

/* const numbers = crazyNumbers.reduce((accumulator, item) =>{

    if(item <501) {
        return accumulator  = item + 1
    }
    return accumulator
},0) */
console.log(numbers)