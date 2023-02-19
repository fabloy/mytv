/* showFilmSelected modfica la parte bassa della view mostrando il dettaglio 
del film selezionato dal click dell'utente */

import { filmSelectedWrapper } from "../control/variables.js"
import { closeFilmDetailFun } from "./animation/showHideFilmDetail.js"

export let showFilmSelected = (film)=>{
  filmSelectedWrapper.innerHTML=`<article>
     <p>${film.Title}</p>
     <p>${film.Year}</p>
     <img src=${film.Poster} style="width=100px heigth=100px"/>
    </article>`
    closeFilmDetailFun()
   }
   