import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentPlayer, setcurrentPlayer] = useState(1);
  const [playerOneSelected, setplayerOneSelected] = useState(null);
  const [playerTwoSelected, setplayerTwoSelected] = useState(null);

  var playerSelected = (name) => {
    if (currentPlayer == 1) {
      setcurrentPlayer(2);
      setplayerOneSelected(name);
    }
  };

  var playerOne;
  if (playerOneSelected) {
    playerOne = <Player name="" player="" />;
  }

  var playerTwo;

  return (
    <div>
      <div>{playerOne}</div>
        <div className="app">
          <img width="500px" src="./images/player-select.jpg" alt="#"/>
          <div class="grid-container">
            <div className="case"><img width="100%" src="../images/players/tiny/chun-li.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/dhalsim.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/guile.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/honda.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/ken.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/ryu.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/zangief.jpg" alt=""/></div>
            <div className="case"><img width="100%" src="../images/players/tiny/blanka.jpg" alt=""/></div>
          </div>
        </div>
      <div>{playerTwo}</div>
    </div>
  );
}

function PlayerPicto() {
  const [selected, setselected] = useState(null);

  return (
    <div>
      <img src="#" alt="#"/>
      <img src="#" alt="#"/>
    </div>
  );
}

function Player() {
  return (
    <div>
      <img src="#" alt="#"/>
      <img src="#" alt="#"/>
    </div>
  );
}

export default App;
