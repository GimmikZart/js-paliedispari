// Chiedo a utente di inserire come input una parola
// tramite una funzione verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var risultato
var parolaUtente = prompt("Inserisci una parola");


function reverseString (dato) {
  var letteredivise = dato.split("");
  // console.log(letteredivise);

  var reversa = letteredivise.reverse();
  // console.log(reversa);

  var creastringa = reversa.join("");
  // console.log(creastringa);

  return creastringa;
}

var alcontrario = reverseString(parolaUtente);
// console.log(alcontrario);

if ( parolaUtente === alcontrario) {
  risultato = "La tua parola è palindroma";
} else {
  risultato = "La tua parola è normale";
}

document.getElementById("box").innerHTML = risultato;






// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//
// var contrario = reverseString(parolaUtente);
// console.log(contrario);
