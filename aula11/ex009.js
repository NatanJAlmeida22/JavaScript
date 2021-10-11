function nacionalidade() {
    var res = document.querySelector("div#res")
    var pais = document.querySelector("input#txtpais")
    if (pais.value == "brasil") {
        res.innerHTML += "Você é <mark>brasileiro</mark>"
    }
}