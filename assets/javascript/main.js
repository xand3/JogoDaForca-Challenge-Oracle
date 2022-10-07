let palavras = ["ALURA", "HTML", "WEB", "JAVASCRIPT", "ORACLE", "LOGICA"]

const areaInicial = $(".init")
const areaNovaPalavra = $(".new-word")
const game = $(".game")

let tabuleiro = $("#forca")[0].getContext('2d')
let novaPalavra = $("#word")
let palavraEscolhida = ''

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
    if(novaPalavra.val() === "" || novaPalavra.val().length < 2) {
        alert("DIGITE UMA PALAVRA VALIDA")
    } else {
        console.log(novaPalavra.val())
        palavras.push(novaPalavra.val().toUpperCase())
        console.log(palavras)
        areaNovaPalavra.hide()
        areaInicial.show()
    }
}

function startGame() {
    areaInicial.hide()
    game.show()

    sortWord()
    drawn()
    drawnLines()
}

function quitGame() {
    game.hide()
    areaInicial.show()
}

function sortWord() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraEscolhida = palavra
    console.log(palavra)
}

