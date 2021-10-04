function brasil(numero) {
    return numero.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}


function reajuste() {
    var res = document.querySelector("div#res")
    var nome = window.prompt("Qual o nome do funcionário?")
    var salary = Number(window.prompt(`Qual o salário de ${nome}`))
    var porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem`))
    var aumento = (salary * porcentagem) / 100
    var new_salary = salary + aumento

    res.innerHTML = `O <mark>salário</mark> atual era ${brasil(salary)}.<br>`
    res.innerHTML += `Com um aumento de ${porcentagem}%, o salário vai aumentar ${brasil(aumento)} no próximo mês.<br>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar ${brasil(new_salary)}<br>`
}