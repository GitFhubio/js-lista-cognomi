// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente [ul, li]
// solo dopo, scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var input=prompt('Ciao utente, quale è il tuo cognome?');
var cognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
if(isNaN(input)){
var cognome = input.charAt(0).toUpperCase() + input.slice(1);
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
  alert('Devi inserire un cognome');
}


// versione base

// var cognome=prompt('Ciao utente, quale è il tuo cognome?');
// var cognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
// if(isNaN(cognome) && cognome[0] === cognome[0].toUpperCase()){
//
// var length= cognomi.push(cognome);
// cognomi=cognomi.sort();
//
// var lista= document.getElementById('lista');
//
// for (var i = 0; i < length; i++) {
//  lista.innerHTML+= '<li>'+ cognomi[i] + '</li>';
// }
//
// var indice = cognomi.indexOf(cognome) + 1 ;
// lista.append('La posizione in cui si trova '+ cognome + ' è: ' + indice);
// }
// else{
//   alert('Devi inserire un cognome,e deve iniziare con la lettera maiuscola');
// }

//



// NOTA : Differenze slice substr substring


// slice() works like substring() with a few different behaviors.
//
// Syntax: string.slice(start, stop);
// Syntax: string.substring(start, stop);
//
// What they have in common:
//
//     If start equals stop: returns an empty string
//     If stop is omitted: extracts characters to the end of the string
//     If either argument is greater than the string's length, the string's length will be used instead.
//
// Distinctions of substring():
//
//     If start > stop, then substring will swap those 2 arguments.
//     If either argument is negative or is NaN, it is treated as if it were 0.
//
// Distinctions of slice():
//
//     If start > stop, slice() will return the empty string. ("")
//     If start is negative: sets char from the end of string, exactly like substr() in Firefox. This behavior is observed in both Firefox and IE.
//     If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.

// substr() Vs. substring()
//
// The difference is in the second argument. The second argument to substring is the index to stop at (but not include), but the second argument to substr is the maximum length to return. Moreover, substr() accepts a negative starting position as an offset from the end of the string. substring() does not.
//
