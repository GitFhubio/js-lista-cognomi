//
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente [ul, li]
// solo dopo, scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognome=prompt('Ciao utente, quale è il tuo cognome?');
var cognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
if(isNaN(cognome) && cognome[0] === cognome[0].toUpperCase()){

var length= cognomi.push(cognome);
cognomi=cognomi.sort();

var lista= document.getElementById('lista');

for (var i = 0; i < length; i++) {
 lista.innerHTML+= '<li>'+ cognomi[i] + '</li>';
}

var indice = cognomi.indexOf(cognome) + 1 ;
lista.append('La posizione in cui si trova '+ cognome + ' è: ' + indice);
}
else{
  alert('Devi inserire un cognome,e deve iniziare con la lettera maiuscola');
}
