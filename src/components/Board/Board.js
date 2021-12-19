import React, { useContext } from "react";

// My Components
import AIC from "../AIC/AIC";

import { _AppContext } from "../../context";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Board(props) {

  const [ appState, dispatch ] = useContext(_AppContext);

  return (
    <Container>
      {appState.museum === "AIC" && <AIC queryURL={appState.queryURL} />}
    </Container>
  );
}
