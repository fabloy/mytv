import { startButton, startPage, topSection } from "../../control/variables.js"
//start è la fuzione che ha il compito di far dissolvere la pagina iniziale 
export const start = ()=>{
    document.addEventListener("DOMContentLoaded",function(){
        startButton.addEventListener("click",()=>{
           startPage.style.opacity="0";
           startPage.style.height="0vh";
           startPage.style.padding="0px";
           topSection.style.opacity="1";
           
        })
        })
}

//dissolve è un metodo che passato un quasliasi elemento HTML come parametro lo fa scomparire.
export const dissolve = (element)=>{
    element.style.opacity="0px";
    element.style.maxHeight="0vh"
}
