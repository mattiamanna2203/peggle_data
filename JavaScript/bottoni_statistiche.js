const bottonElement_uni = document.querySelector('#universita');
bottonElement_uni.classList.add("att");
sessionStorage.setItem('gruppo','universita');

function toggleDropdown(class_div,id_dropdown) {
/*Questa funzione prende in input: 
- La classe dell div della macro-statistica
- L'id del dropdown che contiene le sottostatistiche 

Utilizzando la funzione "get_heigth(id_dropdown)" ottiene il numero di pixel per il quale la div successiva va spostata in ordine di visualizzare  la sottotenda e continuare a vedere anche le macro-statistiche successive.

Inoltre questa funzione cambia anche il colore della macro-statistica quando viene selezionata.

Così facendo si capirà quale macro-statistica viene selezionata
*/
  const c=document.querySelector(class_div);
  const dropdown = document.getElementById(id_dropdown);
  const el=dropdown.nextElementSibling;
  
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    let pixel= get_heigth(id_dropdown);
    el.style.marginTop = `${pixel}px`;
    c.classList.add("attivo");
  } else  {
    dropdown.style.display = "none";
    el.style.marginTop = "0";
    dropdown.classList.add("attivo");
    c.classList.remove("attivo");
  }
}


function get_heigth(id_dropdown){
  /*Questa funzione calcola i pixel che il dropdown andrà ad occupare in altezza.*/
  const li_elements= document.querySelectorAll(`ul#${id_dropdown} li`);
  const n= li_elements.length;
  let altezza_totale=0;

  for (let i = 0; i < n ;i++){
    altezza_totale += li_elements[i].offsetHeight;
  }
  return altezza_totale+0.5;
}



function removeClassFromDivs(){
  /*Questa funzione, creata  in parte da chatgpt, rimuove lo stato attivo da ogni pulsante.
  Viene utilizzata per rimuovere lo stato attivo da un pulsante una volta che ne viene selezionato uno nuovo.
*/
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('attivo');
  }

  var divs = document.getElementsByTagName('li');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('sub-attivo');
  }
}



function close_old_dropdown(current_dropdown="None"){
  /*Questa funzione chiude tutti i dropwdown aperti. 
    In questo modo quando si seleziona un'altra macro-statistica 
    le sub-statistiche della vecchia si chiudono.

    Ad eccezione di:

  */
  var drop = document.getElementsByTagName('ul');
  for (var i = 0; i < drop.length; i++) {
    if ( drop[i].id=== current_dropdown){
      continue
    }
    drop[i].style.display = "none";
    drop[i].nextElementSibling.style.marginTop = "0";
  }
}


function start_function() {
  /*This function solve a bug.
  Particularry solve the double click bug, infact before the creation of that function every time that the page was loaded for activate a button with ul two clicks were requested
*/

  // const currentDate = new Date();
  //  const hours = currentDate.getHours();
  //  const minutes = currentDate.getMinutes();
  // const seconds = currentDate.getSeconds();

  //Prende tutti i dropdown tramite un ciclo for;
  const dropdowns = document.body.querySelectorAll('ul')
  for (let i=0;i < dropdowns.length;i++){
    const dropdown= dropdowns[i];
   // dropdown.style.display = "block";
    dropdown.style.display = "none";
  }
  //console.log("Page loaded!",hours + ':' + minutes + ':' + seconds);
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.querySelector('.peggle-header-image').addEventListener('click',
function() {
  window.location.href = "index.html";})

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*RENDERE I PULSANTI DELLA SIDEBAR CLICCABILI*/


// Statistiche per giocatore

//BOTTONE PRINCIPALE, attivare il sotto-menu di Per giocatore
const bottonElement_GROUP_xgiocatore = document.querySelector('.stats-giocatori');
bottonElement_GROUP_xgiocatore.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          close_old_dropdown("stats-giocatori-menu");
          toggleDropdown(
           ".stats-giocatori", "stats-giocatori-menu");
        }
);

/*---*/
// sub- stats per il pulsante statistiche per giocatore, BOTTONI SECONDARI

// Round vinti 
const buttonElement1=document.querySelector('#stats-giocatori-menu1');
buttonElement1.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement1.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('round_vinti',group);
        }
);
/*------*/
//  Round  amichevoli vinti 
const buttonElement2=document.querySelector('#stats-giocatori-menu2');
buttonElement2.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement2.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('round_amichevoli_vinti',group);
        }
);
/*------*/
//Round vinti  nei tornei
const buttonElement3=document.querySelector('#stats-giocatori-menu3');
buttonElement3.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement3.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('round_torneo_vinti',group);
        }
);
/*------*/
// Punteggi massimi e minimi nei round
const buttonElement4=document.querySelector('#stats-giocatori-menu4');
buttonElement4.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement4.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('max_min',group);
        }
);
/*------*/
//  Partite vinte
const buttonElement8=document.querySelector('#stats-giocatori-menu8');
buttonElement8.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement8.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('partite',group);
        }
);
/*------*/
//  Partite amichevoli vinte
const buttonElement9=document.querySelector('#stats-giocatori-menu9');
buttonElement9.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement9.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('partite_amichevoli',group);
        }
);

/*------*/
//  Partite vinte nei tornei
const buttonElement10=document.querySelector('#stats-giocatori-menu10');
buttonElement10.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement10.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('partite_torneo',group);
        }
);

/*------*/
// Punteggi massimi e minimi nelle partite
const buttonElement11=document.querySelector('#stats-giocatori-menu11');
buttonElement11.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement11.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
          import_json('partite_max_min',group);
        }
);

/*------*/
// Partecipazioni e vittorie nei tornei
const buttonElement17=document.querySelector('#stats-giocatori-menu17');
buttonElement17.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement17.classList.add("sub-attivo");
         // callAPI("famiglia",17); 
        const group= sessionStorage.getItem('gruppo');
        import_json('tornei',group);
        }
);

/*------*/
// Tutte le statistiche per giocatore
const buttonElement18=document.querySelector('#stats-giocatori-menu18');
buttonElement18.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_xgiocatore.classList.add("attivo");
          buttonElement18.classList.add("sub-attivo");
         // callAPI("famiglia",17); 
        const group= sessionStorage.getItem('gruppo');
        import_json('stat_x_giocatore',group);
        }
);


/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/



// Statistiche scontri diretti

//BOTTONE PRINCIPALE, attivare il sotto-menu di Per giocatore
const bottonElement_GROUP_scontridiretti = document.querySelector('.stats-scontri-diretti');
bottonElement_GROUP_scontridiretti.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          close_old_dropdown("scontri-diretti-menu");
          toggleDropdown(
           ".stats-scontri-diretti", "scontri-diretti-menu");
        }
);


//  Round disputati tra giocatori
const buttonElement14=document.querySelector('#scontri-diretti-menu14');
buttonElement14.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_scontridiretti.classList.add("attivo");
          buttonElement14.classList.add("sub-attivo");
      const group= sessionStorage.getItem('gruppo');
        import_json('incontri_per_coppia',group);
        }
);

/*------*/
//   Scontri diretti round
const buttonElement15=document.querySelector('#scontri-diretti-menu15');
buttonElement15.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_scontridiretti.classList.add("attivo");
          buttonElement15.classList.add("sub-attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('scontri_diretti_round',group);
        }
);

/*------*/
//   Scontri diretti partite
const buttonElement16=document.querySelector('#scontri-diretti-menu16');
buttonElement16.addEventListener('click',
    ()=>{
           removeClassFromDivs();
          bottonElement_GROUP_scontridiretti.classList.add("attivo");
          buttonElement16.classList.add("sub-attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('scontri_diretti_partite',group);
        }
);


/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/

// Massimi e minimi generali

//BOTTONE PRINCIPALE, attivare il sotto-menu di Per giocatore
const bottonElement_GROUP_maxminglobal = document.querySelector('.stats-max-min-global');
bottonElement_GROUP_maxminglobal.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_maxminglobal.classList.add("attivo");
          close_old_dropdown("max-min-global-menu");
          toggleDropdown(
           ".stats-max-min-global", "max-min-global-menu");
        }
);

/*------*/
//   Minimo generale nei round
const buttonElement5=document.querySelector('#max-min-global-menu5');
buttonElement5.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_maxminglobal.classList.add("attivo");
          buttonElement5.classList.add("sub-attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('round_absolute_min',group);
        }
);
/*------*/
//  Massimo generale nei round
const buttonElement6=document.querySelector('#max-min-global-menu6');
buttonElement6.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_maxminglobal.classList.add("attivo");
          buttonElement6.classList.add("sub-attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('round_absolute_max',group);

        }
);

/*------*/
//  Minimo generale nelle partite
const buttonElement12=document.querySelector('#max-min-global-menu12');
buttonElement12.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_maxminglobal.classList.add("attivo");
          buttonElement12.classList.add("sub-attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('minimi_globali',group);
        }
);

/*------*/
//  Massimo generale nelle partite
const buttonElement13=document.querySelector('#max-min-global-menu13');
buttonElement13.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          bottonElement_GROUP_maxminglobal.classList.add("attivo");
          buttonElement13.classList.add("sub-attivo");
          const group= sessionStorage.getItem('gruppo');
        import_json('massimi_globali',group);
        }
);

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/


// Tutti i round

// BOTTONE PRINCIPALE, restituisce l'elenco giocatori (NO SOTTO STATISTICHE)
const bottonElement0 = document.querySelector('.all-round');
bottonElement0.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          close_old_dropdown();
          bottonElement0.classList.add("attivo");
        const group= sessionStorage.getItem('gruppo');
        import_json('matches',group);
//matches
        }
);

/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/


// Resoconto partite

// BOTTONE PRINCIPALE, restituisce l'elenco giocatori (NO SOTTO STATISTICHE)
const bottonElement7 = document.querySelector('.all-partite');
bottonElement7.addEventListener('click',
    ()=>{
          removeClassFromDivs();
          close_old_dropdown();
          bottonElement7.classList.add("attivo");
          const group= sessionStorage.getItem('gruppo');
        import_json('partite',group);
        }
);


/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
//Quando si clicca sul titolo dell'header tutti i sotto menu vengono chiusi
const bottonElement_statistiche = document.querySelector('.sidebar-header');
bottonElement_statistiche.addEventListener('click',
    ()=>{
      removeClassFromDivs();
      close_old_dropdown();
    }
);




bottonElement_uni.addEventListener('click',
    ()=>{
    removeClass();
    bottonElement_uni.classList.add("att");
    sessionStorage.setItem('gruppo','universita');
    }
);


const bottonElement_fam = document.querySelector('#famiglia');
bottonElement_fam.addEventListener('click',
    ()=>{
    removeClass();
    bottonElement_fam.classList.add("att");
    sessionStorage.setItem('gruppo','famiglia');
    }
);


function removeClass(){
  /*Questa funzione, creata  in parte da chatgpt, rimuove lo stato attivo da ogni pulsante.
  Viene utilizzata per rimuovere lo stato attivo da un pulsante una volta che ne viene selezionato uno nuovo.
*/

  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('att');
  }
}


