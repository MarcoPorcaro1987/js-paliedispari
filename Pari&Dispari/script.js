// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var oddEven = prompt("Scrivi Pari o Dispari");
var numUser = parseInt(prompt("Scegli un numero tra 1 e 5"));
// Funzioni per numero random e per verifica pari dispari.

function randomizer(min, max){
    return Math.floor(
        Math.random() * (max - min + 1) + min
        );
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } 
}

// Scelta numero random pc

var randomNumber = randomizer(1,5);
alert("Il Numero del Pc è " + randomNumber);

// Somma tra num pc e num utente

var sum = randomNumber + numUser;

// Stabiliamo se la somma dei due numeri è pari o dispari e dichiariamo chi ha vinto.

if ( oddEven == "Pari" && isEven(sum) ) {
    alert(sum + " La somma è Pari! Hai indovinato!")
} else if ( oddEven == "Dispari" && !isEven(sum)) {
    alert(sum + " La somma è Dispari! Hai indovinato!" )
} else {
    alert(sum + " Ritenta, sarai più fortunato")
}

