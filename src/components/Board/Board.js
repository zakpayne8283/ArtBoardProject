import React from "react";

// My Components
import AIC from "../AIC/AIC";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Board(props) {

  console.log(props);

  return (
    <Container>
      {props.museum === "AIC" && <AIC queryURL={props.queryURL} />}
    </Container>
  );
}
