let palavras = ["ALURA", "HTML", "WEB", "JAVASCRIPT", "ORACLE", "LOGICA"];

const areaInicial = $(".init");
const areaNovaPalavra = $(".new-word");
const game = $(".game");

let areaLetrasErradas = $(".letras-erradas");

let tabuleiro = $("#forca")[0].getContext("2d");
let novaPalavra = $("#word");
let palavraSecreta = "";
let palavra;
let letras = [];
let erros = 6

window.addEventListener("load", (e) => {
    areaNovaPalavra.hide();
});

function newWord() {
    areaInicial.hide();
    areaNovaPalavra.show();
    novaPalavra.focus();
}

function cancelNewWord() {
    areaNovaPalavra.hide();
    areaInicial.show();
}

function addWord() {
    if (novaPalavra.val() === "" || novaPalavra.val().length < 2) {
        alert("DIGITE UMA PALAVRA VALIDA");
    } else {
        palavras.push(novaPalavra.val().toUpperCase());
        areaNovaPalavra.hide();
        areaInicial.show();
    }
    novaPalavra.val("");
}

function CountError() { 
	erros -= 1
	console.log(erros)
}

function checkWord(key, keyCode) {
	if(keyCode >= 65 && keyCode <= 90) {
		return true
	} else {
		return false
	}
}

function startGame() {
    console.log(letras)
    areaInicial.hide();
    game.show();

    sortSecretWord();
    drawn();
    drawnLines();
    drawnForca();
    document.addEventListener("keydown", (e) => {
        let letra = e.key.toUpperCase()

        if(letras.includes(letra)){
			alert("LETRA JÁ DIGITADA !")
		} else if(checkWord(letra, e.keyCode) && palavraSecreta.includes(letra)) {
			for(let i = 0; i < palavraSecreta.length; i++) {
				if(palavraSecreta[i] === letra) {
					showCorrectLetter(i)
                    letras.push(letra)
                    console.log(letras)
				}
			}
		} else {
			CountError(letra)
			showWrongLetter(letra, erros)
            letras.push(letra)
            drawnBody(erros)
            console.log(letras)
        }
    });
}

function quitGame() {
    game.hide();
    areaInicial.show();
}

function sortSecretWord() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
    console.log(palavra);
}

