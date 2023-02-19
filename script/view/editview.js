import { name} from "../control/variables.js"
import {getFilms} from "../control/getFilms.js"
import { dissolve } from "./animation/start.js"
import { emptyInputValue, showHideH3} from "./animation/inputFieldCondition.js"
import { editDOM } from "./editDOM.js"

/* editView() è la funzione principale che interviene quando l'utente inserisce 
una stringa nel campo di input, viene interecettato il valore della stringa (titolo del film)
e viene passata a getFilms() che ha il compito principale di effettuare la chiamata asincora
per effettuare la ricerca dei titoli dei film sulla base del film cercato
 */
export let editView = ()=>{
 document.addEventListener("DOMContentLoaded",function(){
  name.addEventListener("input",function(event){
   getFilms(event.target.value)
   
  /* editDOM() effettua modifiche CSS con effetti sul DOM, 
    è una funzione che dato un array con una o più funzioni le itera e le esegue  */ 
  editDOM([
      showHideH3(),
      emptyInputValue(),
      dissolve(topSection)
   ])
})
 })
}