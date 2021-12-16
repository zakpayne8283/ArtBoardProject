import React from "react";

// My Components
import AIC from "../AIC/AIC";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Board(props) {
  return (
    <Container>
      <Row>{props.museum === "AIC" && <AIC />}</Row>
    </Container>
  );
}
