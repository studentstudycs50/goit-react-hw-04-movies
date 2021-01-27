import React, { useState, useEffect } from "react";
import { findFilm } from '../../api/api'
import {NavLink, useHistory, useLocation, useRouteMatch,} from "react-router-dom";

const initials = {
  searchMovies: [],
  query: "",
  serching: "false",
};

const MoviesPage = () => {
  const [state, setState] = useState({ ...initials });
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const onHandleChange = (event) => {
    const { value } = event.target;
    setState({ query: value, serching: "true" });
  };

  const getMovies = async (query) => {
    const result = await findFilm(query);
    setState((prev) => ({
      ...prev,
      
      searchMovies: [...result.results],
      
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getMovies(state.query);
    history.push({
      ...location,
      search: `?query=${state.query}`,
    });
  };

  useEffect(() => {
    if (!location.state) {
      return;
    } else {
      location.state.query &&
        getMovies(location.state.query)
          .then(() =>
          setState((prev) => ({ ...prev, ...location.state }))
        );
    } 
  }, []);

  const { searchMovies, query } = state;

  return (
    <>
      <div>
        <h2>Movies</h2>
        <form onSubmit={onFormSubmit}>
          <input
         
            type="text"
            placeholder="Search movies"
            onChange={onHandleChange}
            value={query}
          />
          <button type="submit" >
           Search
          </button>
        </form>
        <ul>
          {searchMovies &&
            searchMovies.map((movie, index) => (
              <li
               
                key={`${movie.id}${index}`}
              >
                <NavLink 
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {
                      from: location.pathname,
                      query: query,
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
    </>
  );
};

export default MoviesPage;

