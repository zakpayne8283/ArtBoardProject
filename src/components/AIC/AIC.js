import React, { useState, useEffect } from "react";
import Masonry from 'react-masonry-css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function AIC(props) {
  const [artData, setArtData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/search?limit=25&fields=id,image_id,title,artist_title")
      .then((res) => res.json())
      .then(
        (result) => {
          setArtData(result);
          setIsLoaded(true);
        },
        (error) => {
          setDataError(error);
          setIsLoaded(true);
        }
      );
  }, [])

  if (dataError) {
    return <div>Error: {dataError.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Masonry
        breakpointCols={3}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {artData.data.map((item) => (
            <Card>
              <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + item.image_id + "/full/843,/0/default.jpg"} alt={item.title} />
            </Card>
        ))}
      </Masonry>
    );
  }
}
