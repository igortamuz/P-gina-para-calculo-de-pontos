function calcularStatus(playerLevel, fezAcyentian, nivelAcyentian) {
    let stage;
    let pontos = 100 + (playerLevel - 1) * 5;

    ///////////// Calcular status de não TK
    if (playerLevel <= 19) {
        stage = 'Despyrtear/Inicial';
    } else if (playerLevel >= 20 && playerLevel < 30) {
        stage = 'Envolvaltrer/Burst';
    } else if (playerLevel >= 30 && playerLevel <= 39) {
        stage = 'Hiper';
        pontos = 145 + (29 * 5) + ((playerLevel - 30) * 10);
    } else if (playerLevel >= 40 && playerLevel <= 60 && !fezAcyentian) {
        stage = 'Maestyr';
        pontos = 145 + (29 * 5) + ((playerLevel - 30) * 10);
    } else if (playerLevel > 60 && playerLevel <= 100 && !fezAcyentian) {
        stage = 'Zransfear';
        pontos = 145 + (29 * 5) + ((playerLevel - 30) * 10);
    } else if (playerLevel > 100 && !fezAcyentian) {
        stage = 'Pré-Acyentian';
        pontos = 145 + (79 * 5) + (40 * 10) + ((playerLevel - 100) * 30) + 50;
    }

    if (!fezAcyentian) {
        return `Você está no nível ${playerLevel}, tem ${pontos} pontos de status no total!`;
    }

    /////////// Calcular status de TK

    if (fezAcyentian) {
        let pontosTK = (140 + (59 * 5) + ((nivelAcyentian - 60) * 10)) + 100 + (((playerLevel - 1) * 10)) + 45;

        if (nivelAcyentian <= 100) {
            console.log('aq 1 + ', pontosTK)
        }

        if (nivelAcyentian > 100) {
            pontosTK = 140 + (79 * 5) + (40 * 10) + ((nivelAcyentian - 100) * 30) + ((playerLevel - 1) * 10) + 55;
            console.log('aq 2 + ', pontosTK)
        }

        if (playerLevel > 100) {
            pontosTK = pontosTK + ((playerLevel - 100) * 30);
            console.log(pontosTK)
        }

        return `Você está no nível ${playerLevel}, tem ${pontosTK} pontos de status no total e realizou o reset no nível ${nivelAcyentian}!`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("button");

    calcularButton.addEventListener("click", function () {
        const playerLevelInput = parseInt(document.querySelector(".heigthvalue").value);
        const fezAcyentianInput = document.querySelector("input[name='Vishuddha']:checked").value;
        const nivelAcyentianInput = parseInt(document.querySelector(".acientyaninputarea input.acientyaninput").value);

        let fezAcyentian = false;
        if (fezAcyentianInput === "na") {
            fezAcyentian = true;
        }

        let resultado;
        if (fezAcyentian) {
            resultado = calcularStatus(playerLevelInput, fezAcyentian, nivelAcyentianInput);
        } else {
            resultado = calcularStatus(playerLevelInput, fezAcyentian);
        }

        const resultArea = document.querySelector(".resultarea");
        if (resultArea) {
            resultArea.innerHTML = resultado;
        } else {
            console.error("Element with class 'resultarea' not found.");
        }
    });
});

