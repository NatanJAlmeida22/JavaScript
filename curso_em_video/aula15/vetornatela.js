let valores = [8, 1, 7 , 4, 2, 9];
valores.sort()

// Percurso para exibição do vetor
/*for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/

// Para cada posição em VALORES, mostra o VALORES[pos]
for (let pos in valores) {
    console.log(`A posição ${pos} tem o elemento ${valores[pos]}`);
}

// Onde estar o valor, se não existe o valor ele retorna o valor -1
