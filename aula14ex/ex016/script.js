function contar() {
    var ini = document.querySelector("#txti")
    var fim = document.querySelector("#txtf")
    var pas = document.querySelector("#txtp")
    var res = document.querySelector("#res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert("[ERRO] Estar faltando dados")
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO: 1")
            p = 1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += ` \u{1F3C1}`

        
    }
}