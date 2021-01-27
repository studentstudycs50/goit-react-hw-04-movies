import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchMovieTrending } from '../api/api';

const HomePage = () => {
   const [trending, setMoviesTrending] = useState([]);
    const location = useLocation();

  useEffect(() => {
      fetchMovieTrending().then((response) => {   
      setMoviesTrending([...response]);
    });
  }, []);

  
  return (
      <div>
          <h2>Trending today</h2>
      <ul>
        {trending.map((movie) => (
          <li key={`${movie.id}`}>
            <NavLink
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location.pathname,
                  movieId: movie.id,
                },
              }}
                >
                    {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

 export default HomePage;
