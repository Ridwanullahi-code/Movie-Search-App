import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { fetchMovies } from '../redux/features/moviesSlice';
import truncate from '../functions/truncate';
import Navbar from '../components/Navbar';

function Home() {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main className="row_posters">
        {movies.map((m) => (
          <div className="poster" key={m.id}>
            <div className="title">
              <button type="button" onClick={() => { setLike(!like); }}>
                <FaHeart className={`icon ${like && 'liked'}`} />
              </button>
              <p className="movie_title">
                {truncate(m.original_title, 30)
              || truncate(m.title, 30)}
              </p>
            </div>
            <img
              alt={m.original_title || m.title}
              src={`${baseUrl}${m?.poster_path}`}
            />
          </div>
        ))}
      </main>
    </>

  );
}

export default Home;
