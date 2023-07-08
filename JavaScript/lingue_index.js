/*------*/
//Aggiungere interazione al pulsante di cambio lingua (RENDE OPERATIVO)
const language=document.body.querySelector('.english-text');
language.addEventListener('click',  () => {change_language()})

/*------*/
// Questa funzione permette di ereditare la lingua dalle altre pagine del progetto
try {
  let lingua_ereditata= sessionStorage.getItem('lingua');
  let lingua=document.body.querySelector('.english-text');
  let testo=lingua.innerHTML.replace(/^\s+|\s+$/g, '');

  if (lingua_ereditata==='italiano' && testo==='Italiano'){
    //Se la lingua deve essere l'italiano ma il tasto per cambiare lingua dice 'ITALIANO' significa che tutto è ancora in inglese quando invece dovrebbere essere in italiano, così cambiamo tutto.
    change_language_header_IT();
    change_language_index_body_EN();
  }
  else if (lingua_ereditata==='inglese' && testo==='English'){
   //Se la lingua deve essere l'inglese  ma il tasto per cambiare lingua dice 'ENGLISH ' significa che tutto è ancora in ITALIANO   quando invece dovrebbere essere in inglese, così cambiamo tutto.
    change_language_header_EN();
    change_language_index_body_EN();
  }
} catch (error) {}



/*------*/
// FUNZIONE PRINCIPALE PER LA MODIFICA DELLA LINGUA
function change_language(){
  let lingua=document.body.querySelector('.english-text');
  let testo=lingua.innerHTML.replace(/^\s+|\s+$/g, '');
  if (testo==='English'){
    change_language_header_EN();
    change_language_index_body_EN();
    sessionStorage.setItem('lingua','inglese');
  }
  else if (testo==='Italiano'){
    change_language_header_IT();
    change_language_index_body_IT();
    sessionStorage.setItem('lingua','italiano');
  }
}
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
//FUNZIONI PROPRIE DELLA SINGOLA PAGINA HTML

function change_language_index_body_IT(){
  //Rende il testo del body in italiano
  document.body.querySelector('#Ultime-notizie').innerHTML='Ultime notizie';
}
function change_language_index_body_EN(){
  //Rende il testo del body in inglese
  document.body.querySelector('#Ultime-notizie').innerHTML='Latest news';
}

