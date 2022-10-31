import "./App.css";
import {MenuLeft}  from "./components/MenuLeft";
import Slider0 from "./components/Slider0";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";

const App = () => {

  return (
    <div className="Container-Sections">

      <div className="Section-Menu">
        <MenuLeft/>
      </div>

      <div className="Section-Sliders">
        <Slider0/>
        <Slider1/>
        
      </div>

    </div>
  );
};

export default App;