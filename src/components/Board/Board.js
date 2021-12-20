import React, { useContext } from "react";

import debounce from "lodash.debounce";

// My Components
import AIC from "../AIC/AIC";

import { _AppContext } from "../../context";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Board(props) {

  const [ appState, dispatch ] = useContext(_AppContext);

  window.onscroll = debounce(() => {
    if ( ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) && appState.dataLoaded ) {
      dispatch({ type: 'dataPage', dataPage: appState.dataPage + 1})
    }
  }, 100);

  return (
    <Container>
      {appState.museum === "AIC" && <AIC queryURL={appState.queryURL} />}
    </Container>
  );
}
