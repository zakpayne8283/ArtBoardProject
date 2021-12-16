import { useState } from "react";

import Board from "./components/Board/Board"; // TODO: Make this not Board/Board

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [appState, setAppState] = useState({ museum: "AIC" });

  return (
    <div id="App">
      <Board museum={appState.museum} />
    </div>
  );
}
