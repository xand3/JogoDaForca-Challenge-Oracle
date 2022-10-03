let areaInicial = $(".init")
let areaNovaPalavra = $(".new-word")
let novaPalavra = $("#word")

document.onload(
    areaNovaPalavra.hide()
)

function newWord() {
    areaInicial.hide()
    areaNovaPalavra.show()
    novaPalavra.focus()
}

function cancelNewWord() {
    areaNovaPalavra.hide()
    areaInicial.show()
}