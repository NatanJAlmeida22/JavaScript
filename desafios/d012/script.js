function brasil(numero) {
    return numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

function verificar() {
    var atual = Number(window.prompt("Qual era o preço anterior do produto?"))
    var novo = Number(window.prompt("Qual é o preço atual do produto?"))
    var res = document.querySelector("#res")
    res.innerHTML = "<p>Analisando os valores informados</p>"
    res.innerHTML += `<p>O produto custava ${brasil(atual)} e agora custa ${brasil(novo)}</p>`

    if (atual < novo) {
        res.innerHTML += "<p>Hoje o produto está mais caro.</p>"
        var diferenca = novo - atual
        var variacao = ((diferenca) * 100) / atual
        res.innerHTML += `<p>O preço subiu ${brasil(diferenca)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para cima.</p>`
    } else {
        res.innerHTML += "<p>Hoje o produto está mais barato.</p>"
        var diferenca = atual - novo
        var variacao = ((diferenca) * 100) / novo
        res.innerHTML += `<p>O preço caiu ${brasil(diferenca)} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacao.toFixed(2)}% para baixo.</p>`
    }
}