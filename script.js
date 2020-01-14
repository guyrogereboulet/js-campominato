// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34

///VARIABILI///
var numeriComputer = [];
var utente;
var presente = false;
var tentativi = 84;
var score = 0;

// Il computer deve generare 16 numeri casuali da 1 a 100.

///FUNZIONE///
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 1; i <= 16; i++) {
  numeriComputer.push(getRandomIntInclusive(1,100));
}
console.log("Numeri random PC " + numeriComputer);

// l'utente inserisce un numero per 84 tentativi
var x = 0;
while (x < tentativi && presente == false) {
  utente = prompt('Inserisci un numero da 1 a 100')
  console.log('Numero inserito: ' + utente);


  for (var t = 0; t < numeriComputer.length; t++) {
    if (utente == numeriComputer[t]) {
      presente = true;
    }
    if (presente == true) {
      console.log("partita finita");

    }
  }
  x++;
  score++;
  console.log("Lo score è di " + score);
}

console.log(" è stato trovato? " + presente);
