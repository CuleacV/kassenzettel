function berechneProdukt1() {
    const preis1 = parseFloat(document.getElementById('preis1').value) || 0;
    const anzahl1 = parseFloat(document.getElementById('anzahl1').value) || 0;
    const produkt1 = preis1 * anzahl1;
    document.getElementById('produkt1').value = produkt1.toFixed(2);
}

function berechneProdukt2() {
    const preis2 = parseFloat(document.getElementById('preis2').value) || 0;
    const anzahl2 = parseFloat(document.getElementById('anzahl2').value) || 0;
    const produkt2 = preis2 * anzahl2;
    document.getElementById('produkt2').value = produkt2.toFixed(2);
}

function berechnen() {
    const produkt1 = parseFloat(document.getElementById('produkt1').value) || 0;
    const produkt2 = parseFloat(document.getElementById('produkt2').value) || 0;
    const gesamtSumme = produkt1 + produkt2;
    document.getElementById('summe').textContent = 'Summe: ' + gesamtSumme.toFixed(2) + ' €';
}
