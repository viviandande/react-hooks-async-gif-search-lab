import React from "react";

function GifList({ gifs }) {
  const gifurl = gifs.images.original.url;
  return (
    <div>
      <ul>
        <li>
          <img height="220px" src={gifurl} alt="gif" />
        </li>
      </ul>
    </div>
  );
}

export default GifList;