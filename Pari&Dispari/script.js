// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var numUser = parseInt(prompt("Scegli un numero tra 1 e 5"));
while(isNaN(numUser) || numUser < 1 || numUser > 5){
    numUser = parseInt(prompt("Errore! Inserisci un numero tra 1 e 5"));
}

var oddEven = prompt("Scrivi pari o dispari");
while(oddEven != "pari" && oddEven != "dispari"){
    oddEven = prompt("Errore! Scrivi pari o dispari");
}
// Funzioni per numero random e per verifica pari dispari.

function randomizer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Scelta numero random pc

var randomNumber = randomizer(1,5);
alert("Il Numero del Pc è " + randomNumber);

// Somma tra num pc e num utente

var sum = randomNumber + numUser;

// Stabiliamo se la somma dei due numeri è pari o dispari e dichiariamo chi ha vinto.

if( oddEven == "pari" && isEven(sum) ) {
    alert(sum + " La somma è pari! Hai indovinato!")
} else if( oddEven == "Dispari" && !isEven(sum)) {
    alert(sum + " La somma è dispari! Hai indovinato!" )
} else {
    alert(sum + " Ritenta, sarai più fortunato")
}

