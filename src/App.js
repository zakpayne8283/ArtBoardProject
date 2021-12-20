import React, { useState, useContext } from "react";

import Board from "./components/Board/Board"; // TODO: Make this not Board/Board
import AppNavbar from "./components/AppNavbar/AppNavbar";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContext, _AppContext } from "./context";
import InfoBubble from "./components/InfoBubble/InfoBubble";

export default function App() {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    console.log('parent');
    setDarkMode(!darkMode);
  }

  let classes = darkMode ? 'dark-mode' : '';

  return (
    <AppContext>
      <div id="App" className={classes}>
        <AppNavbar /> 
        <Board />
        <InfoBubble toggleDarkMode={toggleDarkMode} />
      </div>
    </AppContext>
  );
}
