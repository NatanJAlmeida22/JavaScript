function calc(){
    var res = document.querySelector("div#res")
    var a = Number(window.prompt("Qual é o valor de a?"))
    var b = Number(window.prompt("Qual é o valor de b?"))
    var c = Number(window.prompt("Qual o valor de c"))
    var delta = (b ** 2) - (4 * 3 * 2)
    
    res.innerHTML = `<h1>Resolvendo Bhaskara</h1><br>`
    res.innerHTML += `A equação atual é ${a}x<sup>2</sup> + ${b}x + ${c} = 0<br>`
    res.innerHTML += `O cálculo realizado será ${b} - 4 . ${a} . ${c}<br>`
    res.innerHTML += `O valor calculado foi <mark>&Delta; = ${delta}</mark>`
}