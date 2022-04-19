import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [ballPlace, setBallPlace] = useState(null);

  var divClick = () => {
    setBallPlace();
    // console.log("click détécté");
  };

  return (
    <div className="app">
      <div class="grid-container">
        <div class="case_white">
          1 <div className="balle"></div>
        </div>
        <div class="case_green">3</div>
        <div class="case_green">5</div>
        <div class="case_white">7</div>
        <div class="case_white">2</div>
        <div class="case_green">4</div>
        <div class="case_green">6</div>
        <div class="case_white">8</div>
      </div>
    </div>
  );
};

export default App;