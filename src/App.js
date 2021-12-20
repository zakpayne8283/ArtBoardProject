import React, { useState } from "react";

import Board from "./components/Board/Board"; // TODO: Make this not Board/Board
import AppNavbar from "./components/AppNavbar/AppNavbar";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContext } from "./context";
import InfoBubble from "./components/InfoBubble/InfoBubble";

export default function App() {  
  return (
    <AppContext>
      <div id="App">
        <AppNavbar /> 
        <Board />
        <InfoBubble />
      </div>
    </AppContext>
  );
}
