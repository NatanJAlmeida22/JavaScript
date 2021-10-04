function troco() {
    var nome = window.prompt("Que produto você está comprando?")
    var preco = Number.parseFloat(window.prompt(`Quanto custa ${nome} que você está comprando?`))
    var pago = Number.parseFloat(window.prompt(`Qual o valor que você deu para pagar ${nome}`))
    window.alert(`Você comprou R$ ${nome} que custou ${preco}\nDeu R$ ${pago} em dinheiro e vai receber R$ ${pago - preco} de troco.\nVolte Sempre!`)
}