import { useState } from "react";

import Board from "./components/Board/Board"; // TODO: Make this not Board/Board
import AppNavbar from "./components/AppNavbar/AppNavbar";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const initialAppState = {
    museum: "AIC",
    queryURL: false
  }

  const [appState, setAppState] = useState(initialAppState);

  const updateSearch = (searchRaw) => {
    // TODO: Some sort of sanitization
    // https://api.artic.edu/api/v1/artworks/search?q=Van%20Gogh&limit=5
    var oldAppState = appState;
    oldAppState.queryURL = "https://api.artic.edu/api/v1/artworks/search?q=" + searchRaw + "&limit=25";
    setAppState(oldAppState);
  }

  return (
    <div id="App">
      <AppNavbar updateSearch={updateSearch} /> 
      <Board museum={appState.museum} queryURL={appState.queryURL} />
    </div>
  );
}
