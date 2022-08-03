const numbers = [1,2,3]
// colocar o " ,0)" ajuda na identificação do que estou retornando no código. 
//Se é um valor boolean, ou texto
const value = numbers.reduce((acumulator, item) => acumulator + item,0)

console.log(value)