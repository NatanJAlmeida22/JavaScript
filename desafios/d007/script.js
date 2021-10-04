var dolar = Number.parseFloat(window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?"))

function converter() {
    var res = document.querySelector("div#res")
    var real = Number.parseFloat(window.prompt("Quantos R$ você tem na carteira?"))
    var convertido = real / dolar
    res.innerHTML = `Com R$ ${real} você pode comprar US$ ${convertido.toFixed(2)}`
}