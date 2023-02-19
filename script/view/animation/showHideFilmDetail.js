import { closeFilmDetail, downSection, insertFilmText, name, topSection } from "../../control/variables.js"

export let displayFilmDetailFun = ()=>{
    downSection.style.overflow="visible"
    downSection.style.height="90vh";
    downSection.style.opacity="1"
    topSection.style.left="0"
    closeFilmDetail.style.opacity="1"
    }

export let closeFilmDetailFun = ()=>{
        closeFilmDetail.addEventListener("click",()=>{
          downSection.style.opacity="0"
          downSection.style.height="0vh"
          downSection.style.overflow="hidden"
          topSection.style.left="25%"
        })
       }

