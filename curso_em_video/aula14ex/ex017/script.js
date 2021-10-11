function tabuada() {
    let num = document.querySelector("#txtn");
    let tab = document.querySelector("#seltab");

    if (num.value.length == 0) {
        window.alert("Por favor digite um número!");
    } else {
        let n = Number(num.value);
        // Limpar o select antes da execução do bloco
        tab.innerHTML = "";
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} X ${c} = ${n * c}`;
            item.value = `tab${c}`
            // Adicionar um elemento filho
            tab.appendChild(item);  
        }
    }
}