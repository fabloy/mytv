
import { displayFilmDetailFun } from "../view/animation/showHideFilmDetail.js"
import { fillInput } from "../view/fillInput.js"
import { editDOM } from "../view/editDOM.js"
import { showFilmSelected } from "../view/showfilmselected.js"

export let selectFilmToshow = (films)=>{
//filmsToShow è l'HTMLcollection contenente gli <li> dei film che appaiono nell'autocomplete:
 let filmsToShow = document.getElementsByClassName("autocompleteElement")

// utilizzo lo spread operator per trasformare l'HTMLcollection in Array così da poterlo mappare nellla riga 17
  filmsToShow=[...filmsToShow] 

  /* utilizzo il map per iterare l'array filmsToShow contenente tutti i film presenti nell'autocomplete,
   in questo modo ad ognuno di essi posso aggiungere l'evento click, se l'utente cliccherà su uno dei film dell'autocomplete
   otterrò l'attributo 'code' che contiene l'id del film selezionato dall'utente.*/
  filmsToShow.map(film=>film.addEventListener("click",function(){
   let idSelected = film.getAttribute("code")
   let filmSelected = films.filter(film=>film.imdbID===idSelected)

   //modifica nel DOM:
   editDOM([
    displayFilmDetailFun(),
    showFilmSelected(filmSelected[0]),
    fillInput(filmSelected[0].Title)
   ])
   
 }))
}




 

