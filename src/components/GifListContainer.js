import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const handleSearch = async (query) => {
    try {
      const apiKey = "dc6zaTOxFJmzC";
      const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;
      
      const response = await fetch(url);
      const data = await response.json();

      const gifData = data.data.slice(0, 3); // Only store the first 3 gifs

      setGifs(gifData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
