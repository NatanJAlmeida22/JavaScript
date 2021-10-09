function media() {
    var res = document.querySelector("#res")
    var nome = window.prompt("Qual o nome do aluno?")
    var nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    var media = (nota1 + nota2) / 2

    if (media < 3) {
        res.innerHTML = `<p>Com média de ${media} <br>Aluno(a): ${nome} estar <mark style= "background: red;">REPROVADO</mark></p>`
    } else if (media < 6) {
        res.innerHTML = `<p>Com média de ${media} <br>Aluno(a): ${nome} estar em <mark style= "background: yellow;">RECUPERAÇÃO</mark></p>`
    } else {
        res.innerHTML = `<p>Com média de ${media} <br>Aluno(a): ${nome} estar <mark style= "background: green;">APROVADO</mark></p>`
    }
}