import React, { useState, useEffect, useContext } from "react";
import Masonry from 'react-masonry-css';

import AICCard from "./AICCard";

import { _AppContext } from "../../context";

import Button from 'react-bootstrap/Button';

export default function AIC(props) {
  const [artData, setArtData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [dataPage, setDataPage] = useState(1);

  const [ appState, dispatch ] = useContext(_AppContext);

  // Fetch Data
  useEffect(() => {

    fetch(appState.queryURL + "&page=" + appState.dataPage)
      .then((res) => res.json())
      .then(
        (result) => {

          let newData = [];
          if (appState.dataPage == 1) {
            newData = result.data;
          } else {
            newData = [...appState.artData, ...result.data];
          }
          // Dispatch updates
          dispatch({ type: 'artData', artData: newData });
          dispatch({ type: 'dataLoaded', dataLoaded: true });
        },
        (error) => {
          dispatch({ type: 'errorMessage', errorMessage: error});
          dispatch({ type: 'dataLoaded', dataLoaded: true });
        }
      );
  }, [appState.dataPage, appState.queryURL]);

  // Return error message on error
  if (appState.errorMessage != false) {
    return <div>Error: {dataError.message}</div>;
  } else if (!appState.dataLoaded) {
    // Loading data
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Masonry
          breakpointCols={4}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {appState.artData.map((item) => (
            <AICCard item={item} darkMode={appState.darkMode} />
          ))}
        </Masonry>        
      </>
    );
  }
}
