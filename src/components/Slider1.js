import './css/Slider1.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import { Data } from "../Data";

const Slider1 = () => {
  let leftBtn = document.getElementById("leftBtn");
  let rightBtn = document.getElementById("rightBtn");
  
  const [index, setIndex] = useState(0);
  const control = Data.length-1;

  //console.log("index: "+index);
  //console.log("control: "+control)

  const InfopreviousImage = () => {
    setIndex(index-1);

    if (index <= 0) {
      setIndex(control);
    }

  };

  const InfonextImage = () => {
    setIndex(index+1);

    if(index >= control){
      setIndex(index - control);
    }
  };

  return (
      <div className="container">
          <div className="card-container">
            
            <button type="button" id="leftBtn" onClick={InfopreviousImage}>
              <FontAwesomeIcon className="Btn-child"
                icon={faChevronLeft}
              />
            </button>
            <button type="button" id="rightBtn" onClick={InfonextImage}>
              <FontAwesomeIcon className="Btn-child"
                icon={faChevronRight}
              />
            </button>

            <span id="views">Seguir viendo</span>
            {Data.map((movie, n) => {
                let position = n > index ? "nextCard" 
                    : n === index ? "activeCard" : "prevCard";
                return(
                  <Card key={movie.Titulo} {...movie} id={index} cardStyle={position} />
                );
            })}
          </div>
      </div>
  );
}

export default Slider1;