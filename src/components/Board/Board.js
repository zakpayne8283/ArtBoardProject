import React from "react";

import AIC from "../AIC/AIC";

export default function Board(props) {
  return <div>{props.museum === "AIC" && <AIC />}</div>;
}
