let palavras = ["ALURA", "PROGRAMADOR", "WEB"]

let areaInicial = $(".init")
let areaNovaPalavra = $(".new-word")
let novaPalavra = $("#word")

window.addEventListener('load', () => {
    areaNovaPalavra.hide()
})

function newWord() {
    areaInicial.hide()
    areaNovaPalavra.show()
    novaPalavra.focus()
}

function cancelNewWord() {
    areaNovaPalavra.hide()
    areaInicial.show()
}

function addWord() {
    console.log(novaPalavra.val())
    palavras.push(novaPalavra.val().toUpperCase())
    console.log(palavras)
}
