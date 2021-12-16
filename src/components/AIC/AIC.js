import React, { useState } from "react";

export default function AIC(props) {
  const [artData, setArtData] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  fetch("https://api.artic.edu/api/v1/artworks/search?limit=5")
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

  if (dataError) {
    return <div>Error: {dataError.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {artData.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    );
  }
}
