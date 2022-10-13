function drawn() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#f3f5fc";
    tabuleiro.strokeStyle = "#0a3871";

    tabuleiro.fillRect(0, 0, 1200, 800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900, 500);
    tabuleiro.lineTo(650, 500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function drawnLines() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#f3f5fc";
    tabuleiro.strokeStyle = "#0a3871";

    const largura = 600 / palavraSecreta.length;

    for (let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + largura * i, 640);
        tabuleiro.lineTo(550 + largura * i, 640);
    }

    tabuleiro.stroke();
    tabuleiro.closePath();
}

function drawnForca() {
    // linha vertical da base
    tabuleiro.lineWidth = 8;
    tabuleiro.moveTo(750, 150);
    tabuleiro.lineTo(750, 500);
    tabuleiro.stroke();

    //linha horizontal
    tabuleiro.moveTo(750, 150);
    tabuleiro.lineTo(850, 150);
    tabuleiro.stroke();

    //linha vertical
    tabuleiro.moveTo(850, 150);
    tabuleiro.lineTo(850, 200);
    tabuleiro.stroke();
}

function showCorrectLetter(index) {
    tabuleiro.font = "bold 52px Red Hat Display";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0a3871";
    tabuleiro.lineWidth = 6;
    let largura = 600 / palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 500 + largura * index, 630);
}

function showWrongLetter(letra, erros) {
    tabuleiro.font = "bold 40px Red Hat Display";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#0a3871";
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText(letra, 520 + 40 * (10 - erros), 720, 40);
}

function drawnBody(erro) {
    switch (erro) {
        case 5:
            console.log("cabeça");
            
            break;
        case 4:
            console.log("tronco")
            break;
        case 3: 
            console.log("braço esquerdo")
            break;
        case 2: 
            console.log("braço direito")
            break;
        case 1:
            console.log("perna esquerda")
            break;
        case 0: 
            console.log("perna direita")
            console.log("game over")
            break;
    }
}
