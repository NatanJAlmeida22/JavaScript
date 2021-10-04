function desconto() {
    var res = document.querySelector("div#res")
    var nome = window.prompt("Qual é o produto que você está comprando")
    var price = Number(window.prompt(`Qual o preço de ${nome}`))
    var safe = price / 10
    var final_price = price - safe
    res.innerHTML = `<h1>Calculando desconto de 10% para ${nome}</h1>`
    res.innerHTML += `O preço original era ${price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.\n`
    res.innerHTML += `Você acaba de ganhar ${safe.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de desconto (-10%)\n`
    res.innerHTML += `No fim, você vai pagar ${final_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${nome}`
}