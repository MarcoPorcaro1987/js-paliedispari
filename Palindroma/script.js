// Chiedere all’utente di inserire una parola
var string = prompt("Inserisci una parola");

 // funzione per dividere, invertire e riunire la stringa inserita dall'utente
function reverseString(string){
    var reversedString = string.split("").reverse().join(""); 
    console.log(reversedString); 
    return reversedString;
}

// dichiarare variabile stringa invertita dalla funzione
var reversedString = reverseString(string);

// verificare se la parola è palindroma

if(string == reversedString){
    alert("la parola è palindroma");
}   else {
    alert("la parola non è palindroma");
}