import React, { useState } from "react";

import Board from "./components/Board/Board"; // TODO: Make this not Board/Board
import AppNavbar from "./components/AppNavbar/AppNavbar";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContext } from "./context";

export default function App() {
  const initialAppState = {
    museum: "AIC",
    queryURL: "https://api.artic.edu/api/v1/artworks/search?limit=25&fields=id,image_id,title,artist_title",
    dataPage: 1,
    artData: [],
    dataLoaded: false,
    errorMessage: false
  }

  const [appState, setAppState] = useState(initialAppState);

  function updateAppState(newAppState) {
    setAppState(newAppState);
  }

  const context = {
    appState,
    updateAppState
  }

  const updateSearch = (searchRaw) => {
    // TODO: Some sort of sanitization
    // https://api.artic.edu/api/v1/artworks/search?q=Van%20Gogh&limit=5
    var oldAppState = appState;
    oldAppState.queryURL = "https://api.artic.edu/api/v1/artworks/search?q=" + searchRaw + "&limit=25";
    setAppState(oldAppState);
  }
  
  return (
    <AppContext>
      <div id="App">
        <AppNavbar updateSearch={updateSearch} /> 
        <Board museum={appState.museum} queryURL={appState.queryURL} />
      </div>
    </AppContext>
  );
}
