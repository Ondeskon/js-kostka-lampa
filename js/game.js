var hodyKostka1 = [];
var hodyKostka2 = [];
var pocetHodu = 0;

document.getElementById('game').addEventListener('click', function () {
    if (pocetHodu < 5) {
        hod();
        console.log(hodyKostka1, hodyKostka2);
    } else {
        zobrazVysledek();
        zobrazZnovuTlacitko();
    }
});

function zobrazVysledek() {
    var soucet1 = hodyKostka1.reduce((a, b) => a + b, 0);
    var soucet2 = hodyKostka2.reduce((a, b) => a + b, 0);

    var vysledekElement1 = document.getElementById('result1');
    var vysledekElement2 = document.getElementById('result2');

    if (soucet1 > soucet2) {
        vysledekElement1.innerHTML = '<p>Vítěz: Kostka 1</p>';
        vysledekElement2.innerHTML = '<p>Porážka: Kostka 2</p>';
    } else if (soucet1 < soucet2) {
        vysledekElement1.innerHTML = '<p>Porážka: Kostka 1</p>';
        vysledekElement2.innerHTML = '<p>Vítěz: Kostka 2</p>';
    } else {
        vysledekElement1.innerHTML = '<p>Remíza</p>';
        vysledekElement2.innerHTML = '<p>Remíza</p>';
    }

    // Zobrazí předchozí hody
    var rollsListElement = document.getElementById('rollsList');
    rollsListElement.innerHTML = '';

    for (var i = 0; i < hodyKostka1.length; i++) {
        rollsListElement.innerHTML += '<li>Hod Kostka 1: ' + hodyKostka1[i] + '</li>';
    }

    for (var j = 0; j < hodyKostka2.length; j++) {
        rollsListElement.innerHTML += '<li>Hod Kostka 2: ' + hodyKostka2[j] + '</li>';
    }
}

function suma(cisla) {
    return cisla.reduce((a, b) => a + b, 0);
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    var h1 = Math.ceil(Math.random() * 6);
    var h2 = Math.ceil(Math.random() * 6);
    hodyKostka1.push(h1);
    hodyKostka2.push(h2);

    var diceElement1 = document.getElementById('dice1').querySelector('img');
    var diceElement2 = document.getElementById('dice2').querySelector('img');

    // Odstranění animace, stačí přímé nastavení zdroje obrázku
    diceElement1.src = 'img/kostka' + h1 + '.png';
    diceElement2.src = 'img/kostka' + h2 + '.png';

    var resultElement1 = document.getElementById('result1');
    var resultElement2 = document.getElementById('result2');

    resultElement1.innerHTML = '<p>Hod Kostka 1: ' + h1 + '</p>';
    resultElement1.innerHTML += '<p>Součet hodů Kostka 1: ' + suma(hodyKostka1) + '</p>';
    resultElement1.innerHTML += '<p>Průměr hodů Kostka 1: ' + average(suma(hodyKostka1), hodyKostka1.length) + '</p>';

    resultElement2.innerHTML = '<p>Hod Kostka 2: ' + h2 + '</p>';
    resultElement2.innerHTML += '<p>Součet hodů Kostka 2: ' + suma(hodyKostka2) + '</p>';
    resultElement2.innerHTML += '<p>Průměr hodů Kostka 2: ' + average(suma(hodyKostka2), hodyKostka2.length) + '</p>';

    pocetHodu++;
}

function zobrazZnovuTlacitko() {
    var gameButton = document.getElementById('game');
    gameButton.innerHTML = 'Znovu hrát';
    gameButton.removeEventListener('click', function () {
        location.reload(); // znovu načte stránku
    });
    gameButton.addEventListener('click', function () {
        location.reload(); // znovu načte stránku
    });
}

