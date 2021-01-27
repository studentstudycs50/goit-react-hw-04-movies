import React, { useState, useEffect, Suspense } from "react";
import { NavLink, Route, Switch, useHistory, useLocation, useRouteMatch, } from "react-router-dom";
import { fetchMovieDetails } from "../api/api";
import {movieDetailsRoutes} from '../routes/movieDetailsRoutes';

const MovieDetailsPage = () => {

    const [state, setState] = useState({});
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();

    const getMovieDetails = async (id) => {
        const result = await fetchMovieDetails(id);
        setState({ ...result })
    };
    useEffect(() => {
      getMovieDetails(history.location.state.movieId)
    }, [])

    const goBack = () => {
        history.push(
            {
                pathname: location.state.from,
                search: `?query=${location.state.query}`,
                state: {
                    from: location.pathname,
                    query: location.state.query,
                }
            }
        )
    }
  const { id, poster_path, title, release_date, vote_average, overview, genres, } = state;
  
    return (
     
       <div>
            <button type="button" onClick={goBack}>Go back</button>  
            <div>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : title}
                    alt={title} width="300px" />
                <div>
                    <h2>{title} ({release_date && release_date.slice(0, 4)})</h2>
                    <p>User score: {vote_average * 10}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {genres &&
                genres.map((item) => (
                  <li key={item.id}>
                    {item.name}
                  </li>
                ))}
                    </ul>
                </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                    {movieDetailsRoutes.map(({ name, path, exact }) => (
              <li  key={`${id}${name}`}>
                <NavLink
                  to={{
                    pathname: `${match.url}${path}`,
                    state: { ...location.state },
                  }}
                  exact={exact}
                
                >
                  {name}
                </NavLink>
              </li>
            ))}
                </ul>
        </div>
         
             <Suspense fallback={<div>Loading...</div>}>
                 <Switch>
            {movieDetailsRoutes.map(({ path, exact, component }) => (
              <Route
                path={`${match.url}${path}`}
                exact={exact}
                key={`${id}${path}`}
                component={component}
              />
            ))}
          </Switch>
          </Suspense> 
          
      </div>
      

    );
}

export default MovieDetailsPage;