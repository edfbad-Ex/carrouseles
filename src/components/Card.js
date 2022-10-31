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

const Card = ({ImagenCard,VideoCard,BotonPlay,BotonAgregar,Titulo,Descripcion,Duracion,FechaEstreno, cardStyle, id}) => {
 //console.log(cardStyle)
  let cardstyles = document.getElementsByClassName("card");
  let container_prime = document.getElementsByClassName("container-prime");
  let imagen = document.getElementsByClassName("imagen");
  let video = document.getElementsByClassName("video");
  let containervideo = document.getElementsByClassName("container-video");
  let container_video_buttons = document.getElementsByClassName("container-video-buttons");
  let container_video_buttons_child = document.getElementsByClassName("container-video-buttons-child");
  let container_details = document.getElementsByClassName("container-details");
  let container_buttom_audio = document.getElementsByClassName("container-buttom-audio");
  let VolumenUpControl = document.getElementsByClassName("VolumenUp");
  let VolumenMuteControl = document.getElementsByClassName("VolumenMute");

  let titulo = document.getElementsByClassName("titulo");
  let include = document.getElementsByClassName("include");
  let video_description = document.getElementsByClassName("video-description");
  let video_dates_premier = document.getElementsByClassName("video-dates-premier");

  let [VUp, setVUp] = useState()
  let [VMute, setVMute] = useState()

  const SoundVideo = () =>{
    
    let display_state = VolumenUpControl[id].style.display;

    if (display_state !== "block") {
      //alert("si");
      video[id].muted = false;

      VUp = "block";
      VMute = "none";

      VolumenUpControl[id].style.display=VUp;
      VolumenMuteControl[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    } 
    else {
      //alert("no");
      video[id].muted = true;

      VUp = "none";
      VMute = "block";
      
      VolumenUpControl[id].style.display=VUp;
      VolumenMuteControl[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    }
  };

  const playid = () =>{

    if(cardStyle !== "nextCard" && cardStyle !== "prevCard"){

      cardstyles[id].style.zIndex = "1";
      
      imagen[id].style.opacity = "0";
      imagen[id].style.display = "none";

      video[id].style.opacity = "1";
      video[id].style.display = "flex";
      video[id].play();

      container_prime[id].style.transition = "ease-in-out 350ms";

      containervideo[id].style.position  = "absolute";
      containervideo[id].style.zIndex  = "1"; 
      containervideo[id].style.transform = "translateY(-30px)"; 
      containervideo[id].style.border = "2px solid rgb(0, 187, 255)";
      containervideo[id].style.transition = "ease-in-out 350ms";

      container_video_buttons[id].style.zIndex  = "1"; 
      container_video_buttons[id].style.height = "auto";
      container_video_buttons[id].style.opacity = "1";
      container_video_buttons[id].style.background = "linear-gradient(rgba(27,37,48,0),#1b2530 48px)"

      container_video_buttons_child[id].style.display = "flex";
      container_video_buttons_child[id].style.opacity = "1";
      container_video_buttons_child[id].style.transition = "ease-in-out 350ms";

      container_details[id].style.display = "flex";

      container_buttom_audio[id].style.opacity = "1";
      container_buttom_audio[id].style.transition = "ease-in-out 350ms";

      titulo[id].style.opacity = "1";
      titulo[id].style.transition = "ease-in-out 350ms";

      include[id].style.opacity = "1";
      include[id].style.transition = "ease-in-out 350ms";

      video_description[id].style.opacity = "1";
      video_description[id].style.transition = "ease-in-out 350ms";

      video_dates_premier[id].style.opacity = "1";
      video_dates_premier[id].style.transition = "ease-in-out 350ms";
    }

  }

  const pauseid = () =>{

    cardstyles[id].style.zIndex = "0";
    imagen[id].style.opacity = "1";
    imagen[id].style.display = "flex";

    video[id].style.opacity = "0";
    video[id].style.display = "none";
    video[id].pause();

    containervideo[id].style.position  = "absolute";
    containervideo[id].style.zIndex  = "-1"; 
    containervideo[id].style.transform = "translateY(0px)";
    containervideo[id].style.border = "2px solid transparent";

    container_video_buttons[id].style.background = "linear-gradient(to bottom, transparent, #212a31d3)"
    container_video_buttons[id].style.zIndex  = "-1"; 
    container_video_buttons[id].style.height = "0px";

    container_video_buttons_child[id].style.display = "none";

    container_details[id].style.display = "none";

    container_buttom_audio[id].style.opacity = "0";

    titulo[id].style.opacity = "0";

    include[id].style.opacity = "0";
    
    video_description[id].style.opacity = "0";

    video_dates_premier[id].style.opacity = "0";
  }

  return (
    <div className={`card ${cardStyle}`}>

        <div className="container-video" style={stylescontainervideo} onMouseOver={()=>playid()} onMouseOut={()=>pauseid()} tabIndex="2">

          <div className="container-prime" style={stylescontainer_prime}>
            <span className="container-prime-child">Prime</span>
          </div>
            
          <div className="container-buttom-audio">
            <button className="button-audio" onClick={()=>SoundVideo()}>
              <FontAwesomeIcon className="VolumenUp"
                icon={faVolumeUp}
              />
              
              <FontAwesomeIcon className="VolumenMute"
                icon={faVolumeMute}
              />
            </button>
          </div>
          
          <img src={ImagenCard} className="imagen" alt={Titulo}/>

          <video className="video" src={VideoCard} muted loop></video>

          <div className="container-video-buttons" style={stylescontainer_video_buttons}>

            <div className="container-video-buttons-child" style={stylescontainer_video_buttons_child}>

              <button type="button" className="circleBtnPlay">
                <FontAwesomeIcon className="circleBtnPlay-child"
                  icon={faPlay}
                />
              </button>
              <span className="spanPlay">Reproducir</span>

              <button type="button" className="circleBtnPlayTrailer">
                <FontAwesomeIcon className="circleBtnPlayTrailer-child"
                  icon={faPlay}
                />
              </button>

              <button type="button" className="circleBtnAdd">
                <FontAwesomeIcon className="circleBtnAdd-child"
                  icon={faPlus}
                />
              </button>

              <button type="button" className="circleBtnHide">
                <FontAwesomeIcon className="circleBtnHide-child"
                  icon={faBan}
                />
              </button>

            </div>

            <div className="container-details" style={stylescontainer_details}>

              <div className="container-video-details">
                <span className="include">Se incluye con Prime</span>
                
                <span className="titulo">{Titulo}</span>

                <p className="video-description">
                  {Descripcion}
                </p>

                <div className="video-dates-premier">
                  <span>{Duracion}</span>
                  <span>{FechaEstreno}</span>
                </div>
              </div>

            </div>
          
          </div>
        </div>
        
    </div>
  );
}

export default Card;
