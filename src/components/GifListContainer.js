import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [APIData, setAPIData] = useState("");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${APIData}&api_key=rQu3NRUbvOi2ZnNYq9Tx44sDnsePxvkO&rating=g`
    )
      .then((res) => res.json())
      .then((data) => {
        const theFirstThreeGifs = data.data.slice(0, 3);
        setGifs(theFirstThreeGifs);
      });
  }, [APIData]);

  function handleGifSubmit(e) {
    setAPIData(e);
  }

  return (
    <div className="container">
      <div className="row">
        <div>
          <GifSearch handleGifSubmit={handleGifSubmit} />
        </div>
        <div className="col">
          {gifs.map((gif) => (
            <GifList gifs={gif} key={gif.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GifListContainer;