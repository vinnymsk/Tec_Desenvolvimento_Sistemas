const numeros = [1, 2, 3, 4, 5, 8];

// Adicionar elementos
numeros[0] = 100; // Substitui caso o índice já exista
numeros.push(6); // Adiciona no final
console.log(numeros);

console.log(numeros.indexOf(4))
console.log(numeros.includes(10))
console.log(numeros.includes(6))
console.log(numeros.join(' - '))

const valores = [20, 30, 40, 50];
console.log(numeros.concat(valores));