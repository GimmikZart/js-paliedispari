// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// dichiaro le variabili iniziali ------------------------------------
var utenteUno;
var utenteDue;
var manoUno;
var manoDue;
var somma;
var risultato

// dichiaro le mie funzioni ----------------------------------------

// funzione per scegliere fra "argomenti"
function scelte(a,b,c,d,e) {
    var scelta = [a,b];

    if (c != undefined) {
      scelta.push(c)
    }

    if (d != undefined) {
      scelta.push(d);
    }

    if (e != undefined) {
      scelta.push(e);
    }

    var sceltafinale = scelta[Math.floor(Math.random() * scelta.length)];
    return sceltafinale;
}


// --------------PARI O DISPARI? ----------------------------------------//
// dichiaro la scelta tra pari o dispari usando la funzione precedente
utenteUno = scelte("pari","dispari");


// imposto le condizioni per fare scegliere la seconda opzione all'utente due
if (utenteUno === "pari") {
  utenteDue = "dispari";
} else if (utenteUno === "dispari"){
  utenteDue = "pari";
}

document.getElementById("sceltauno").innerHTML = utenteUno;
document.getElementById("sceltadue").innerHTML = utenteDue;
// console.log("utente uno: " + utenteUno);
// console.log("utente due: " + utenteDue);


// ----------- DA UNO A CINQUE? ---------------------------------------//
// dichiaro la scelta delle mani fra i due utenti
manoUno = scelte(1,2,3,4,5);
manoDue = scelte(1,2,3,4,5);

document.getElementById("numeroUno").innerHTML = manoUno;
document.getElementById("numeroDue").innerHTML = manoDue;
// console.log("utente uno: " + manoUno);
// console.log("utente due: " + manoDue);


// ---------- RISULTATO? ---------------------------------------------//

somma = manoUno + manoDue;

document.getElementById("somma").innerHTML = "La somma fa: " + somma;

if (utenteUno === "pari" && somma % 2 === 0) {
  risultato = "UTENTE UNO VINCE";
} else if (utenteUno === "dispari" && somma % 2 != 0) {
  risultato = "UTENTE UNO VINCE";
} else {
  risultato = "UTENTE DUE VINCE";
}

document.getElementById("risultato").innerHTML = risultato;
console.log(risultato);
