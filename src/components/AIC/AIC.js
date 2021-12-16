import React, { useState, useEffect } from "react";

export default function AIC(props) {
  const [artData, setArtData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/search?limit=5&fields=id,image_id,title,artist_title")
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
      <div>
        {artData.data.map((item) => (
          // <li>{JSON.stringify(item)}</li>
          <div>
            <img src={"https://www.artic.edu/iiif/2/" + item.image_id + "/full/843,/0/default.jpg"} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.artist_title}</p>
          </div>
        ))}
      </div>
    );
  }
}
