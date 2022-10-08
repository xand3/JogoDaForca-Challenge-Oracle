let palavras = ["ALURA", "HTML", "WEB", "JAVASCRIPT", "ORACLE", "LOGICA"]

const areaInicial = $(".init")
const areaNovaPalavra = $(".new-word")
const game = $(".game")

let tabuleiro = $("#forca")[0].getContext('2d')
let novaPalavra = $("#word")
let palavraEscolhida = ''
let palavra

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
    novaPalavra.val("")
}

function startGame() {
    areaInicial.hide()
    game.show()

    sortWord()
    drawn()
    drawnLines()
    play()
    drawnForca()
}

function quitGame() {
    game.hide()
    areaInicial.show()
}

function sortWord() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraEscolhida = palavra
    console.log(palavra)
}

function play() {
    document.addEventListener("keydown", (e) => {
        let letra = e.key.toUpperCase()
        console.log(letra)
        if(palavra.includes(letra)) {
            console.log('existe')
        } else {
            console.log('não existe')
        }
    })
}

