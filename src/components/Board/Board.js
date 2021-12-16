import React from "react";

// My Components
import AIC from "../AIC/AIC";

// Bootstrap
import Container from "react-bootstrap/Container";

export default function Board(props) {
  return (
    <Container>
      {props.museum === "AIC" && <AIC />}
    </Container>
  );
}
