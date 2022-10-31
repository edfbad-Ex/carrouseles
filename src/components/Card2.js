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
  let cardstyles1 = document.getElementsByClassName("card1");
  let container_prime1 = document.getElementsByClassName("container-prime1");
  let imagen1 = document.getElementsByClassName("imagen1");
  let video1 = document.getElementsByClassName("video1");
  let containervideo1 = document.getElementsByClassName("container-video1");
  let container_video_buttons1 = document.getElementsByClassName("container-video-buttons1");
  let container_video_buttons_child1 = document.getElementsByClassName("container-video-buttons-child1");
  let container_details1 = document.getElementsByClassName("container-details1");
  let container_buttom_audio1 = document.getElementsByClassName("container-buttom-audio1");
  let VolumenUpControl1 = document.getElementsByClassName("VolumenUp1");
  let VolumenMuteControl1 = document.getElementsByClassName("VolumenMute1");

  let titulo1 = document.getElementsByClassName("titulo1");
  let include1 = document.getElementsByClassName("include1");
  let video_description1 = document.getElementsByClassName("video-description1");
  let video_dates_premier1 = document.getElementsByClassName("video-dates-premier1");

  let [VUp, setVUp] = useState()
  let [VMute, setVMute] = useState()

  const SoundVideo1 = () =>{
    
    let display_state = VolumenUpControl1[id].style.display;

    if (display_state !== "block") {
      //alert("si");
      video1[id].muted = false;

      VUp = "block";
      VMute = "none";

      VolumenUpControl1[id].style.display=VUp;
      VolumenMuteControl1[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    } 
    else {
      //alert("no");
      video1[id].muted = true;

      VUp = "none";
      VMute = "block";
      
      VolumenUpControl1[id].style.display=VUp;
      VolumenMuteControl1[id].style.display=VMute;

      setVUp(VUp);
      setVMute(VMute);
    }
  };

  const playid1 = () =>{

    if(cardStyle !== "nextCard1" && cardStyle !== "prevCard1"){

      imagen1[id].style.opacity = "0";
      imagen1[id].style.display = "none";

      video1[id].style.opacity = "1";
      video1[id].style.display = "flex";
      video1[id].play();

      cardstyles1[id].style.zIndex = "1";

      container_prime1[id].style.transition = "ease-in-out 350ms";

      containervideo1[id].style.position  = "absolute";
      containervideo1[id].style.zIndex  = "1"; 
      containervideo1[id].style.transform = "translateY(-30px)"; 
      containervideo1[id].style.border = "2px solid rgb(0, 187, 255)";
      containervideo1[id].style.transition = "ease-in-out 350ms";

      container_video_buttons1[id].style.zIndex  = "1"; 
      container_video_buttons1[id].style.height = "auto";
      container_video_buttons1[id].style.opacity = "1";
      container_video_buttons1[id].style.background = "linear-gradient(rgba(27,37,48,0),#1b2530 48px)";

      container_video_buttons_child1[id].style.display = "flex";
      container_video_buttons_child1[id].style.opacity = "1";
      container_video_buttons_child1[id].style.transition = "ease-in-out 350ms";

      container_details1[id].style.display = "flex";

      container_buttom_audio1[id].style.opacity = "1";
      container_buttom_audio1[id].style.transition = "ease-in-out 350ms";

      titulo1[id].style.opacity = "1";
      titulo1[id].style.transition = "ease-in-out 350ms";

      include1[id].style.opacity = "1";
      include1[id].style.transition = "ease-in-out 350ms";

      video_description1[id].style.opacity = "1";
      video_description1[id].style.transition = "ease-in-out 350ms";

      video_dates_premier1[id].style.opacity = "1";
      video_dates_premier1[id].style.transition = "ease-in-out 350ms";
    }

  }

  const pauseid1 = () =>{
    
    imagen1[id].style.opacity = "1";
    imagen1[id].style.display = "flex";

    video1[id].style.opacity = "0";
    video1[id].style.display = "none";
    video1[id].pause();

    cardstyles1[id].style.zIndex = "0";

    containervideo1[id].style.position  = "absolute";
    containervideo1[id].style.zIndex  = "-1"; 
    containervideo1[id].style.transform = "translateY(0px)";
    containervideo1[id].style.border = "2px solid transparent";

    container_video_buttons1[id].style.background = "linear-gradient(to bottom, transparent, #212a31d3)"
    container_video_buttons1[id].style.zIndex  = "-1"; 
    container_video_buttons1[id].style.height = "0px";

    container_video_buttons_child1[id].style.display = "none";

    container_details1[id].style.display = "none";

    container_buttom_audio1[id].style.opacity = "0";

    titulo1[id].style.opacity = "0";

    include1[id].style.opacity = "0";
    
    video_description1[id].style.opacity = "0";

    video_dates_premier1[id].style.opacity = "0";
  }

  return (
    <div className={`card1 ${cardStyle}`}>

        <div className="container-video1" style={stylescontainervideo} onMouseOver={()=>playid1()} onMouseOut={()=>pauseid1()} tabIndex="2">

          <div className="container-prime1" style={stylescontainer_prime}>
            <span className="container-prime-child1">Prime</span>
          </div>
            
          <div className="container-buttom-audio1">
            <button className="button-audio" onClick={()=>SoundVideo1()}>
              <FontAwesomeIcon className="VolumenUp1"
                icon={faVolumeUp}
              />
              
              <FontAwesomeIcon className="VolumenMute1"
                icon={faVolumeMute}
              />
            </button>
          </div>
          
          <img src={ImagenCard} className="imagen1" alt={Titulo}/>

          <video className="video1" src={VideoCard} muted loop></video>

          <div className="container-video-buttons1" style={stylescontainer_video_buttons}>

            <div className="container-video-buttons-child1" style={stylescontainer_video_buttons_child}>

              <button type="button" className="circleBtnPlay1">
                <FontAwesomeIcon className="circleBtnPlay-child1"
                  icon={faPlay}
                />
              </button>
              <span className="spanPlay1">Reproducir</span>

              <button type="button" className="circleBtnPlayTrailer1">
                <FontAwesomeIcon className="circleBtnPlayTrailer-child1"
                  icon={faPlay}
                />
              </button>

              <button type="button" className="circleBtnAdd1">
                <FontAwesomeIcon className="circleBtnAdd-child1"
                  icon={faPlus}
                />
              </button>

              <button type="button" className="circleBtnHide1">
                <FontAwesomeIcon className="circleBtnHide-child1"
                  icon={faBan}
                />
              </button>

            </div>

            <div className="container-details1" style={stylescontainer_details}>

              <div className="container-video-details1">
                <span className="include1">Se incluye con Prime</span>
                
                <span className="titulo1">{Titulo}</span>

                <p className="video-description1">
                  {Descripcion}
                </p>

                <div className="video-dates-premier1">
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

export default Card2;
