import React, { useState } from "react";

function GifSearch({ handleGifSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleGifSubmit(searchTerm);
  }

  return (
    <div className="app">
      <form className="form-label col" onSubmit={onSubmit}>
        <div>
          <label>
            Search Here
            <input
              type="text"
              className="form-control"
              name="search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </label>
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            Search Gifs
          </button>
        </div>
      </form>
    </div>
  );
}

export default GifSearch;