//Aggiungere interazione al pulsante di cambio lingua (RENDE OPERATIVO)
const language=document.body.querySelector('.english-text');
language.addEventListener('click',  () => {change_language()})


/*------*/
// FUNZIONE PRINCIPALE PER LA MODIFICA DELLA LINGUA quando viene cliccato un tasto
function change_language(){
  let lingua=document.body.querySelector('.english-text');
  let testo=lingua.innerHTML.replace(/^\s+|\s+$/g, '');
  if (testo==='English'){
    change_language_header_EN();  
    change_language_nav_statistiche_EN();
    sessionStorage.setItem('lingua','inglese');
  }
  else if (testo==='Italiano'){
    change_language_header_IT();
    change_language_nav_statistiche_IT();
    sessionStorage.setItem('lingua','italiano');
  }
}
/*------------------------------------------------------*
/*------------------------------------------------------*
/*------*/
// Questa funzione permette di ereditare la lingua dalle altre pagine del progetto
try {
  let lingua_ereditata= sessionStorage.getItem('lingua');
  let lingua=document.body.querySelector('.english-text');
  let testo=lingua.innerHTML.replace(/^\s+|\s+$/g, '');

  if (lingua_ereditata==='italiano' && testo==='Italiano'){
    //Se la lingua deve essere l'italiano ma il tasto per cambiare lingua dice 'ITALIANO' significa che tutto è ancora in inglese quando invece dovrebbere essere in italiano, così cambiamo tutto.
    change_language_header_IT();
    change_language_nav_statistiche_IT();
  }
  else if (lingua_ereditata==='inglese' && testo==='English'){
   //Se la lingua deve essere l'inglese  ma il tasto per cambiare lingua dice 'ENGLISH ' significa che tutto è ancora in ITALIANO   quando invece dovrebbere essere in inglese, così cambiamo tutto.
    change_language_header_EN();
    change_language_nav_statistiche_EN();
  }
} catch (error) {}


function change_language_nav_statistiche_EN(){


  //Titolo sidebar
  document.body.querySelector('#sidebar-title-gruppi').innerText='Groups';

  document.body.querySelector('#universita').innerText='University';

  document.body.querySelector('#famiglia').innerText='Family';



  //Titolo sidebar
  document.body.querySelector('#sidebar-title-statistiche').innerText='Stats';
  //Sub stats
    //  Round vinti 
    document.body.querySelector('#stats-giocatori-menu1').innerText='Rounds won';

    //  Round  amichevoli vinti 
    document.body.querySelector('#stats-giocatori-menu2').innerText='Friendly rounds won';

    //   Round vinti nei tornei
    document.body.querySelector('#stats-giocatori-menu3').innerText='Rounds won during tournaments';

    //   Punteggi massimi e minimi nei round
    document.body.querySelector('#stats-giocatori-menu4').innerText='Maximum and minimum points scored in a round';

    //   Partite vinte
    document.body.querySelector('#stats-giocatori-menu8').innerText='Matches won';

    //   Partite amichevoli vinte
    document.body.querySelector('#stats-giocatori-menu9').innerText='Friendly matches won';

    //  Partite vinte nei tornei
    document.body.querySelector('#stats-giocatori-menu10').innerText='Matches won during tournaments';

    //   Punteggi massimi e minimi nelle partite
    document.body.querySelector('#stats-giocatori-menu11').innerText='Maximum and minimum points scored in a match';

    //   Partecipazioni e vittorie nei tornei
    document.body.querySelector('#stats-giocatori-menu17').innerText='Participation and win in tournaments';
  //Statistiche per giocatori
  document.body.querySelector('.stats-giocatori').innerText='Stats for each player';

  //Scontri diretti
  document.body.querySelector('.stats-scontri-diretti').innerText='VS';
  //Sub stats
    //  Round disputati tra giocatori
    document.body.querySelector('#scontri-diretti-menu14').innerText='Rounds played among partecipants';

    //  Scontri diretti round
    document.body.querySelector('#scontri-diretti-menu15').innerText='VS rounds';

    //  Round disputati tra giocatori
    document.body.querySelector('#scontri-diretti-menu16').innerText='VS matches';

  //Massimi e minimi generali
  document.body.querySelector('.stats-max-min-global').innerText='Global max e min';
  //Sub stats
    //  Punteggio minimo in un round
    document.body.querySelector('#max-min-global-menu5').innerText='Min points scored in one round';
    //  Punteggio massimo in un round
    document.body.querySelector('#max-min-global-menu6').innerText='Max points scored in one round';

    //  Punteggio minimo in una partita
    document.body.querySelector('#max-min-global-menu12').innerText='Min points scored in one match';

    //   Punteggio massimo in una partita
    document.body.querySelector('#max-min-global-menu13').innerText='Max points scored in one match';

  //Tutti i round giocati
  document.body.querySelector('.all-round').innerText='All rounds played';

  //Tutte le partite giocate
  document.body.querySelector('.all-partite').innerText='All matches played';
}


function change_language_nav_statistiche_IT(){
  //Titolo sidebar
  document.body.querySelector('#sidebar-title-gruppi').innerText='Gruppi';

  document.body.querySelector('#universita').innerText='Università';

  document.body.querySelector('#famiglia').innerText='Famiglia';






  //Titolo sidebar
  document.body.querySelector('#sidebar-title-statistiche').innerText='Statistiche';


  //Statistiche per giocatori
  document.body.querySelector('.stats-giocatori').innerText='Statistiche per giocatore';
  //Sub stats
    //  Round vinti 
    document.body.querySelector('#stats-giocatori-menu1').innerText='Round vinti';

    //  Round  amichevoli vinti 
    document.body.querySelector('#stats-giocatori-menu2').innerText='Round amichevoli vinti';

    //   Round vinti nei tornei
    document.body.querySelector('#stats-giocatori-menu3').innerText=' Round vinti nei tornei';

    //   Punteggi massimi e minimi nei round
    document.body.querySelector('#stats-giocatori-menu4').innerText='Punteggi massimi e minimi nei round';

    //   Partite vinte
    document.body.querySelector('#stats-giocatori-menu8').innerText='Partite vinte';

    //   Partite amichevoli vinte
    document.body.querySelector('#stats-giocatori-menu9').innerText='Partite amichevoli vinte';

    //  Partite vinte nei tornei
    document.body.querySelector('#stats-giocatori-menu10').innerText='Partite vinte nei tornei';

    //   Punteggi massimi e minimi nelle partite
    document.body.querySelector('#stats-giocatori-menu11').innerText='Punteggi massimi e minimi nelle partite';

    //   Partecipazioni e vittorie nei tornei
    document.body.querySelector('#stats-giocatori-menu17').innerText='Partecipazioni e vittorie nei tornei';


  //Scontri diretti
  document.body.querySelector('.stats-scontri-diretti').innerText='Scontri diretti';
  //Sub stats
    //  Round disputati tra giocatori
    document.body.querySelector('#scontri-diretti-menu14').innerText='Round disputati tra giocatori';

    //  Scontri diretti round
    document.body.querySelector('#scontri-diretti-menu15').innerText='Scontri diretti round';

    //  Round disputati tra giocatori
    document.body.querySelector('#scontri-diretti-menu16').innerText='Round disputati tra giocatori';

  //Massimi e minimi generali
  document.body.querySelector('.stats-max-min-global').innerText='Massimi e minimi generali';
  //Sub stats
    //  Punteggio minimo in un round
    document.body.querySelector('#max-min-global-menu5').innerText='Punteggio minimo in un round';
    //  Punteggio massimo in un round
    document.body.querySelector('#max-min-global-menu6').innerText='Punteggio massimo in un round';

    //  Punteggio minimo in una partita
    document.body.querySelector('#max-min-global-menu12').innerText='Punteggio minimo in una partita';

    //   Punteggio massimo in una partita
    document.body.querySelector('#max-min-global-menu13').innerText='Punteggio massimo in una partita';

  //Tutti i round giocati
  document.body.querySelector('.all-round').innerText='Tutti i round giocati';

  //Tutte le partite giocate
  document.body.querySelector('.all-partite').innerText='Resoconto partite';
}
