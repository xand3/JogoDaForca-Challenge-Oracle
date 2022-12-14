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
        case 5: // cabeça
            tabuleiro.beginPath()
            tabuleiro.arc(850, 230, 30, 0, 2 * Math.PI)
            tabuleiro.stroke()
            break;
        case 4: // tronco
            tabuleiro.beginPath()
            tabuleiro.moveTo(850, 260);
            tabuleiro.lineTo(850, 400);
            tabuleiro.stroke();
            break;
        case 3: // braço esquerdo
            tabuleiro.beginPath()
            tabuleiro.moveTo(850, 260);
            tabuleiro.lineTo(800, 300);
            tabuleiro.stroke();
            break;
        case 2: // braço direito
            tabuleiro.beginPath()
            tabuleiro.moveTo(850, 260);
            tabuleiro.lineTo(900, 300);
            tabuleiro.stroke();
            break;
        case 1: // perna esquerda
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 400);
            tabuleiro.lineTo(800, 440);
            tabuleiro.stroke();
            break;
        case 0: // perna direita
            tabuleiro.beginPath();
            tabuleiro.moveTo(850, 400);
            tabuleiro.lineTo(900, 440);
            tabuleiro.stroke();
            console.log("game over")
            break;
    }
}

function loser() {
    tabuleiro.font = "bold 40px Red Hat Display";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "red";
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText("Você perdeu :/", 900, 200);
}

function winner() { 
    tabuleiro.font = "bold 40px Red Hat Display";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "green";
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText("Você ganhou !", 880, 200, 200);
}