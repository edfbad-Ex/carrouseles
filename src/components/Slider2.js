import './css/Slider2.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Card2 from "./Card2";
import { Data } from "../Data";

const Slider2 = () => {
  let [index, setIndex] = useState(0);
  let control = Data.length-1;

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
      <div className="container1">
          <div className="card-container1">
            
            <button type="button" id="leftBtn1" onClick={InfopreviousImage}>
              <FontAwesomeIcon className="Btn-child1"
                icon={faChevronLeft}
              />
            </button>
            <button type="button" id="rightBtn1" onClick={InfonextImage}>
              <FontAwesomeIcon className="Btn-child1"
                icon={faChevronRight}
              />
            </button>

            {Data.map((movie, n) => {
                let position = n > index ? "nextCard1" 
                    : n === index ? "activeCard1" : "prevCard1";
                return(
                  <Card2 key={movie.Titulo} {...movie} id={index} cardStyle={position} />
                );
            })}
          </div>
      </div>
  );
}

export default Slider2;