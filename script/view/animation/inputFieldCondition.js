
import { closeFilmDetail, insertFilmText, name, topSection } from "../../control/variables.js"

/* emptyInputValue() effettua modifiche se nel campo input 
   non è inserito nessun titolo */ 
   export let emptyInputValue = ()=>{
    name.value.length===0 ? filmSelectedWrapper.innerHTML="" : filmSelectedWrapper.innerHTML=filmSelectedWrapper.innerHTML
    name.value.length===0 ? closeFilmDetail.style.opacity="0" : closeFilmDetail.style.opacity
    name.value.length===0 ? topSection.style.left="25%" : topSection.style.left
 }

 /* showHideH3() fa appariere e scomparire l'H3 se nel campo input 
   non è inserito nessun titolo */ 
 export let showHideH3 = ()=>{
   name.value.length>0 ? insertFilmText.style.opacity="0" : insertFilmText.style.opacity="1"
 }