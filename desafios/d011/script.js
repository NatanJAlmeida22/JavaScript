function calc() {
    var ano = Number(window.prompt("Qual o ano que você quer verificar?"))
    var res = document.querySelector("#res")
    res.innerHTML = `<p><strong>Analisando o ano de ${ano}...</strong></p>`
    if (ano % 4 == 0) {
        res.innerHTML += `O ano de ${ano} <strong><mark style= "background: green;">É BISSEXTO</mark></strong> \u{2705}`
    } else {
        res.innerHTML += `O ano de ${ano} <strong><mark style= "background: red;">NÃO É BISSEXTO</mark></strong> \u{274C}`
    }
}