function drawn() {
    tabuleiro.lineWidth = 8
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#f3f5fc"
    tabuleiro.strokeStyle = "#0a3871"

    tabuleiro.fillRect(0, 0, 1200, 800)
    tabuleiro.beginPath()
    tabuleiro.moveTo(900, 500)
    tabuleiro.lineTo(650, 500)
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function drawnLines() {
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.fillStyle = "#f3f5fc"
    tabuleiro.strokeStyle = "#0a3871"

    const largura = 600 / palavraEscolhida.length

    for(let i = 0; i < palavraEscolhida.length; i++) {
        tabuleiro.moveTo(500 + (largura * i), 640)
        tabuleiro.lineTo(550 + (largura * i), 640)
    }

    tabuleiro.stroke()
    tabuleiro.closePath()
}

function drawnForca() {
    // linha vertical da base
    tabuleiro.lineWidth = 8
    tabuleiro.moveTo(750, 150)
    tabuleiro.lineTo(750, 500)
    tabuleiro.stroke()

    //linha horizontal
    tabuleiro.moveTo(750, 150)
    tabuleiro.lineTo(850, 150)
    tabuleiro.stroke()

    //linha vertical
    tabuleiro.moveTo(850, 150)
    tabuleiro.lineTo(850, 200)
    tabuleiro.stroke()
}