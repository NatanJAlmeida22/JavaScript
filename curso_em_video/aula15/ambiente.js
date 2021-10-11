let num = [5, 8, 2, 9, 3];
// Vai colocar em ordem crescente
// Coloca o elemento sempre na última posição
num.push(1)
num.sort()
console.log(num);
// Saber o comprimento do Array | Lenght é um atributo
console.log(`O vetor tem ${num.length} posições`);
// Mostrar o vetor
console.log(`O primeiro valor é ${num[0]}`);
let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado`);
} else {
    console.log(`O valor está na posição ${pos}`);
}