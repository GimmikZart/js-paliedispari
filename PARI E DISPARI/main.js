// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// dichiaro le variabili iniziali ------------------------------------
var utenteUno;
var utenteDue;
var manoUno;
var manoDue;

// dichiaro le mie funzioni ----------------------------------------

// funzione per scegliere fra due fattori
function pariODispari(a,b) {
    var scelte = [a,b];
    var sceltafinale = scelte[Math.floor(Math.random() * scelte.length)];
    return sceltafinale;
}


// funzione per scegliere fra più numeri
function daUnoACinque(a,b,c,d,e) {
    var scelte = [a,b,c,d,e];
    var sceltafinale = scelte[Math.floor(Math.random() * scelte.length)];
    return sceltafinale;
}



// dichiaro la scelta tra pari o dispari usando la funzione precedente
utenteUno = pariODispari("pari","dispari");


// imposto le condizioni per fare scegliere la seconda opzione all'utente due
if (utenteUno === "pari") {
  utenteDue = "dispari";
} else if (utenteUno === "dispari"){
  utenteDue = "pari";
}

manoUno = daUnoACinque(1,2,3,4,5);
manoDue = daUnoACinque(1,2,3,4,5);
console.log(manoUno , manoDue);



console.log(utenteUno);
console.log(utenteDue);
