import './css/Slider0.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Card0 from "./Card0";
import Paginator from "./Paginator";
import { DataSlider0 } from "../Data";

const Slider0 = () => {
  let [index, setIndex] = useState(0);
  let control = DataSlider0.length-1;

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

  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };

  return (
      <div className="container0">
          <div className="card-container0">

            <Paginator
              dataLength={DataSlider0.length}
              activeIndex={index}
              handlePageChange={handlePageChange}
            />
            
            <button type="button" id="leftBtn0" onClick={InfopreviousImage}>
              <FontAwesomeIcon className="Btn-child0"
                icon={faChevronLeft}
              />
            </button>
            <button type="button" id="rightBtn0" onClick={InfonextImage}>
              <FontAwesomeIcon className="Btn-child0"
                icon={faChevronRight}
              />
            </button>

            {DataSlider0.map((movie, n) => {
                let position = n > index ? "nextCard0" 
                    : n === index ? "activeCard0" : "prevCard0";
                return(
                  <Card0 key={movie.ImagenCard} {...movie} id={index} cardStyle={position} />
                );
            })}
          </div>
      </div>
  );
}

export default Slider0;