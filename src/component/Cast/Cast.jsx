import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieCast } from '../../api/api';


const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();

  const getCast = async (id) => {
    const result = await fetchMovieCast(id);
    setState({ ...result });
  };

  useEffect(() => {
    getCast(location.state.movieId);
  }, []);

  const { cast } = state;
  return (
    
      <div>
        <ul>
          {cast && cast.map((item) => (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                  width="100px"
                />
                <p> {item.name}</p>
                <p>
                  Character: {item.character}
                </p>
              </li>
            ))}
        </ul>
      </div>
   
  );
};

export default Cast;