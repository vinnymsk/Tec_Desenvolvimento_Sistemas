//                0  1   2    3   4   5  6
const numeros = [ 1, 2, 365, 20, 10, 6, 35];

numeros.push(100);
numeros.push(120);
numeros.push(40);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i+= 2) {
    console.log(numeros[i]);
    
}
