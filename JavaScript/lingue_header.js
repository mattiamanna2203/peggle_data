//Funziona per tutti gli header
function change_language_header_EN(){
  //Header trasformato in inglese
  document.body.querySelector('#Statistiche').innerHTML='Stats';
  document.body.querySelector('#Chi-siamo').innerHTML='About us';
  document.body.querySelector('.english-text').innerHTML='Italiano';
}

//Funziona per tutti gli header
function change_language_header_IT(){
  //Header trasformato in italiano
  document.body.querySelector('#Statistiche').innerHTML='Statistiche';
  document.body.querySelector('#Chi-siamo').innerHTML='Chi siamo';
  document.body.querySelector('.english-text').innerHTML='English';
}