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
    change_language_index_body_EN();
    sessionStorage.setItem('lingua','inglese');
  }
  else if (testo==='Italiano'){
    change_language_header_IT();
    change_language_index_body_IT();
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
    change_language_index_body_IT();
  }
  else if (lingua_ereditata==='inglese' && testo==='English'){
   //Se la lingua deve essere l'inglese  ma il tasto per cambiare lingua dice 'ENGLISH ' significa che tutto è ancora in ITALIANO   quando invece dovrebbere essere in inglese, così cambiamo tutto.
    change_language_header_EN();
    change_language_index_body_EN();
  }
} catch (error) {}


/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/
//FUNZIONI PROPRIE DELLA SINGOLA PAGINA HTML

function change_language_index_body_IT(){
  document.body.querySelector('#T1').innerText='Le nostre ispirazioni';


  //Rende il testo del body in italiano
  document.body.querySelector('#T2').innerText='Peggle è un gioco a noi molto caro, nei lavori di gruppo universitari ha scandito le nostre pause di lavoro ed parlando di team building è stato il vero e proprio collante nelle sfide affrontate.';

  document.body.querySelector('#T3').innerText="Per questi motivi quando ci è stata proposto di realizzare un progetto che sfruttasse le tecnologie in cloud abbiamo subito deciso di realizzare un sito web. L'obiettivo sarebbe stato creare una piattaforma in grado fornire a chiunque la possibilità di ottenere una serie di statistiche una volta inseriti i dati delle proprie partite.";

 document.body.querySelector('#T4').innerText="Avremmo voluto realizzare molto di più di quello che vedete ora nel nostro sito, tuttavia essendo solo un team di due persone, pergiunta alla loro prima esperienza di web development, molte idee sono stata temporaneamente abbandonate. Inizialmente il progetto prevedeva un forum nel quale gli utenti potessero interagire, e la possibilità di inserire fogli excel con i propri dati e di ottenere subito le statistiche desiderate.";

 document.body.querySelector('#T5').innerText="Chi siamo";

 document.body.querySelector('#T6').innerText="Siamo Lorenzo e Mattia due studenti frequentanti una laurea magistrale in Data Science presso l'Università Sapienza di Roma.";

 document.body.querySelector('#T7').innerText="Come già detto abbiamo creato questo sito come esercizio di stile e per approfondire la nostra conoscenza con il compute clouding, in particolare la piattaforma AWS. Per realizzare ciò abbiamo studiato da autodidatti, o quasi, le basi dei JavaScript, dell'html e dell' css.";

 document.body.querySelector('#T8').innerHTML="Diciamo da quasi da autodidatti perchè abbiamo seguito le lezioni sul canale youtube  <a href='https://www.youtube.com/@SuperSimpleDev'> <strong>SuperSimpleDev</strong></a>. Detto questo ci sentiamo di consigliare vivamente il canale a chiunque voglia avvicinarsi al web developing. Infatti su di esso potrete trovare due grandi tutorial che spiegano questi linguaggi partendo direttamente dalle basi, rendendole adatte anche a chi non possiede alcuna nozione di programmazione";

document.body.querySelector('#T9').innerText="Classe 2000 è uno studente di Data Science presso l'Università Sapienza di Roma, ed è a capo di questo progetto.";

document.body.querySelector('#T10').innerText="Ha curato lo sviluppo della back-end e parte della front-end, oltre a supervisionare il tutto.";

document.body.querySelector('#T11').innerText="Laureato in Statistica, economia, finanza e assicurazioni con 102/110 all'Università Sapienza di Roma.";

document.body.querySelector('#T12').innerText="In passato è stato un promettente mezzofondista nelle categorie giovanili, senza mai raggiungere risultati eccellenti. Come miglior risultato vanta un quarto posto ai campionati italiani di corsa su strada under 17, campionati disputati su una distanza 10km.";

document.body.querySelector('#T13').innerText="Classe 2000 è uno studente di Data Science presso l'Università Sapienza di Roma.";

document.body.querySelector('#T14').innerText="Ha curato la front-end e la parte inglese del sito web, inoltre si è occupato della parte relativa alla scalability.";

document.body.querySelector('#T15').innerText="Laureato in Statistica, economia, finanza e assicurazioni con 101/110 all'Università Sapienza di Roma.";

document.body.querySelector('#T16').innerText="In passato si è dilettato in vari sport di squadra come il canottaggio e il calcio a livello amatoriale.";
}
function change_language_index_body_EN(){

  document.body.querySelector('#T1').innerText='Our inspirations';

  //Rende il testo del body in inglese
  document.body.querySelector('#T2').innerText='Peggle is a game that is very dear to us. During many of our university group projects it marked our work breaks and we can say it was a key element in the team building, the bonding element we needed to create a solid group.';

  document.body.querySelector('#T3').innerText="For these reasons, when we were proposed to create a project that leveraged cloud technologies, we immediately decided to build a website. The goal was to create a platform capable of providing  to anyone a series of statistics regarding the matches played, and also to upload the results of the matches.";


  document.body.querySelector('#T4').innerText="We would have liked to create much more than what you see on our website now. However, being just a team of two people, and also being our first experience in web development, many ideas were temporarily abandoned. Initially, the project included a forum where users could interact, as well as the ability to upload Excel sheets with their data and immediately obtain the desired statistics.";

 document.body.querySelector('#T5').innerText="About us";

 document.body.querySelector('#T6').innerText="We are Lorenzo and Mattia, two students pursuing a Master's degree in Data Science at Sapienza University of Rome.";

 document.body.querySelector('#T7').innerText="As mentioned before, we created this website as a style exercise and to deepen our knowledge of cloud computing, particularly the AWS platform. Since we come from a Statistics bachelor's degree, we had no experience in creating and progrsamming a website. To achieve this, we studied the basics of JavaScript, HTML, and CSS as self-taught learners, or almost.";

 document.body.querySelector('#T8').innerHTML="We say 'almost' because we followed the lessons on the youtube channel <a href='https://www.youtube.com/@SuperSimpleDev'> <strong>SuperSimpleDev</strong></a>. Having said that, we highly recommend the channel to anyone who wants to get started with web development. In fact, you can find two great tutorials on the channel that explain these languages starting from the very basics, making them suitable even for those who have no programming knowledge.";

document.body.querySelector('#T9').innerText="Born in 2000, he is a Data Science student at Sapienza University of Rome and is leading this project.";

document.body.querySelector('#T10').innerText="He has overseen the development of the back-end and part of the front-end, as well as supervising everything.";

document.body.querySelector('#T11').innerText="He graduated in 'Statistica, economia, finanza e assicurazioni' with a score of 102/110 at Sapienza University of Rome.";

document.body.querySelector('#T12').innerText="In the past, he was a promising middle-distance runner in the youth categories, although he never achieved outstanding results. His best result is a fourth place in the Italian under-17 road racing championships, a competition held over a distance of 10km.";

document.body.querySelector('#T13').innerText="Born in 2000 he is a Data Science student at Sapienza University of Rome.";

document.body.querySelector('#T14').innerText="He has worked on the front-end and the English part of the website, and he has also handled the scalability aspect.";

document.body.querySelector('#T15').innerText="He graduated in 'Statistica, economia, finanza e assicurazioni' with a score of 101/110 at Sapienza University of Rome.";

document.body.querySelector('#T16').innerText="In the past, he has dabbled in various team sports such as rowing and football at an amateur level.";
}

