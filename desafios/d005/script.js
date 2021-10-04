function converter() {
    var metros = Number.parseFloat(window.prompt("Digite uma distância em metros (m)"))
    var res = document.querySelector("div#res")
    km = metros / 1000
    hm = metros / 100
    dam = metros / 10
    dm = metros * 10
    cm = metros * 100
    mm = metros * 1000

    res.innerHTML = `<strong>A distância de ${metros} metros, corresponde a...</strong>`
    res.innerHTML += `<p>${km.toFixed(3)} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm.toFixed(3)} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam.toFixed(3)} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm.toFixed(2)} hectômetros (dm)</p>`
    res.innerHTML += `<p>${cm.toFixed(2)} hectômetros (cm)</p>`
    res.innerHTML += `<p>${mm.toFixed(2)} hectômetros (mm)</p>`
}