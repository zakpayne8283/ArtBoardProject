import React, { useState, useEffect } from "react";
import Masonry from 'react-masonry-css';

import AICCard from "./AICCard";

import Button from 'react-bootstrap/Button';

export default function AIC(props) {
  const [artData, setArtData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [dataPage, setDataPage] = useState(1);

  // Fetch Data
  useEffect(() => {
    console.log(props);

    let queryURL = '';
    if (props.queryURL == false) {
      queryURL = "https://api.artic.edu/api/v1/artworks/search?limit=25&page=1&fields=id,image_id,title,artist_title"
    } else {
      queryURL = props.queryURL + '&page=1';
    }

    fetch(queryURL)
      .then((res) => res.json())
      .then(
        (result) => {
          setArtData(result.data);
          setIsLoaded(true);
          setDataPage(dataPage + 1);
        },
        (error) => {
          setDataError(error);
          setIsLoaded(true);
        }
      );
  }, [props.queryURL]);

  const loadMore = () => {
    fetch("https://api.artic.edu/api/v1/artworks/search?limit=25&page=" + dataPage + "&fields=id,image_id,title,artist_title")
      .then((res) => res.json())
      .then(
        (result) => {
          setArtData([...artData, ...result.data]);
          setIsLoaded(true);
          setDataPage(dataPage + 1);
        },
        (error) => {
          setDataError(error);
          setIsLoaded(true);
        }
      );
  }

  // Return error message on error
  if (dataError) {
    return <div>Error: {dataError.message}</div>;
  } else if (!isLoaded) {
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
          {artData.map((item) => (
            <AICCard item={item} />
          ))}
        </Masonry>        
        <Button onClick={loadMore}>Load More</Button> {/* TODO: Change this to infinity scroll */}
      </>
    );
  }
}
