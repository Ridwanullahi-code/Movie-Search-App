import React, { useState, useEffect } from 'react';
import fetchData from '../functions/fetchData';
import truncate from '../functions/truncate';

function Banner({ classes, fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads and don't run again
    fetchData(classes, fetchUrl, setMovie);
  }, []);

  const style = {
    backgroundSize: 'cover',
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie ? movie.backdrop_path : ''}")`,
    backgroundPosition: 'center center',
  };

  return (
    <header className="banner" style={style}>
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button type="button" className="banner_button">Play</button>
          <button type="button" className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
