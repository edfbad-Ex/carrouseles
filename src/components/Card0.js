import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faBan, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import {
    stylescontainer_prime,
    stylescontainervideo,
    stylescontainer_video_buttons,
    stylescontainer_video_buttons_child,
    stylescontainer_details
} from './stylesComponentsCard/Styles.js';

import { useState } from "react";

const Card2 = ({ImagenCard,VideoCard,BotonPlay,BotonAgregar,Titulo,Descripcion,Duracion,FechaEstreno, cardStyle, id}) => {
 //console.log(cardStyle)
  let cardstyles0 = document.getElementsByClassName("card0");
  let container_prime0 = document.getElementsByClassName("container-prime0");
  let imagen0 = document.getElementsByClassName("imagen0");
  let video0 = document.getElementsByClassName("video0");
  let containervideo0 = document.getElementsByClassName("container-video0");
  let container_video_buttons0 = document.getElementsByClassName("container-video-buttons0");
  let container_video_buttons_child0 = document.getElementsByClassName("container-video-buttons-child0");
  let container_details0 = document.getElementsByClassName("container-details0");
  let container_buttom_audio0 = document.getElementsByClassName("container-buttom-audio0");
  let VolumenUpControl0 = document.getElementsByClassName("VolumenUp0");
  let VolumenMuteControl0 = document.getElementsByClassName("VolumenMute0");

  let titulo0 = document.getElementsByClassName("titulo0");
  let include0 = document.getElementsByClassName("include0");
  let video_description0 = document.getElementsByClassName("video-description0");
  let video_dates_premier0 = document.getElementsByClassName("video-dates-premier0");

  let [VUp, setVUp] = useState()
  let [VMute, setVMute] = useState()

  const SoundVideo1 = () =>{
    
    let display_state = VolumenUpControl0[id].style.display;

    if (display_state !== "block") {
      //alert("si");
      video0[id].muted = false;

      VUp = "block";
      VMute = "none";

      VolumenUpControl0[id].style.display=VUp;
      VolumenMuteControl0[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    } 
    else {
      //alert("no");
      video0[id].muted = true;

      VUp = "none";
      VMute = "block";
      
      VolumenUpControl0[id].style.display=VUp;
      VolumenMuteControl0[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    }
  };

  const playid1 = () =>{

    if(cardStyle !== "nextCard0" && cardStyle !== "prevCard0"){

      imagen0[id].style.opacity = "0";
      imagen0[id].style.display = "none";

      video0[id].style.opacity = "1";
      video0[id].style.display = "flex";
      video0[id].play();

      cardstyles0[id].style.zIndex = "1";

      container_prime0[id].style.transition = "ease-in-out 350ms";

      containervideo0[id].style.position  = "absolute";
      containervideo0[id].style.zIndex  = "1"; 
      containervideo0[id].style.transform = "translateY(-30px)"; 
      containervideo0[id].style.border = "2px solid rgb(0, 187, 255)";
      containervideo0[id].style.transition = "ease-in-out 350ms";

      container_video_buttons0[id].style.zIndex  = "1"; 
      container_video_buttons0[id].style.height = "auto";
      container_video_buttons0[id].style.opacity = "1";
      container_video_buttons0[id].style.background = "#0f171e"

      container_video_buttons_child0[id].style.display = "flex";
      container_video_buttons_child0[id].style.opacity = "1";
      container_video_buttons_child0[id].style.transition = "ease-in-out 350ms";

      container_details0[id].style.display = "flex";

      container_buttom_audio0[id].style.opacity = "1";
      container_buttom_audio0[id].style.transition = "ease-in-out 350ms";

      titulo0[id].style.opacity = "1";
      titulo0[id].style.transition = "ease-in-out 350ms";

      include0[id].style.opacity = "1";
      include0[id].style.transition = "ease-in-out 350ms";

      video_description0[id].style.opacity = "1";
      video_description0[id].style.transition = "ease-in-out 350ms";

      video_dates_premier0[id].style.opacity = "1";
      video_dates_premier0[id].style.transition = "ease-in-out 350ms";
    }

  }

  const pauseid1 = () =>{
    
    imagen0[id].style.opacity = "1";
    imagen0[id].style.display = "flex";

    video0[id].style.opacity = "0";
    video0[id].style.display = "none";
    video0[id].pause();

    cardstyles0[id].style.zIndex = "0";

    containervideo0[id].style.position  = "absolute";
    containervideo0[id].style.zIndex  = "-1"; 
    containervideo0[id].style.transform = "translateY(0px)";
    containervideo0[id].style.border = "2px solid transparent";

    container_video_buttons0[id].style.background = "linear-gradient(to bottom, transparent, #212a31d3)"
    container_video_buttons0[id].style.zIndex  = "-1"; 
    container_video_buttons0[id].style.height = "0px";

    container_video_buttons_child0[id].style.display = "none";

    container_details0[id].style.display = "none";

    container_buttom_audio0[id].style.opacity = "0";

    titulo0[id].style.opacity = "0";

    include0[id].style.opacity = "0";
    
    video_description0[id].style.opacity = "0";

    video_dates_premier0[id].style.opacity = "0";
  }

  return (
    <div className={`card0 ${cardStyle}`}>

        <div className="container-video0" style={stylescontainervideo}tabIndex="2">
          
          <img src={ImagenCard} className="imagen0" alt={Titulo}/>

        </div>
        
    </div>
  );
}

export default Card2;
