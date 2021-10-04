function converter() {
    var res = document.querySelector("div#res")
    var cel = Number.parseFloat(window.prompt("Digite uma temperatura em °C (Celsisu)"))
    var kel = cel + 273
    var fah = (1.8 * cel) + 32
    res.innerHTML = `A temperatura de ${cel}°C, corresponde a...`
    res.innerHTML = `${kel.toFixed(2)}°K (Kelvin)<br>`
    res.innerHTML += `${fah.toFixed(2)}°F (Fahrenheit)`
}