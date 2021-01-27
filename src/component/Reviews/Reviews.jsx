 import React, { useEffect, useState } from 'react';
 import { useLocation } from 'react-router-dom';
 import{ fetchMovieReviews} from '../../api/api';

 const Reviews = () => {
    const [state, setState] = useState({});
    const location = useLocation();
    
    const getMovieReviews = async (id) => {
    const result = await fetchMovieReviews(id);
    setState({ ...result });
  };
  useEffect(() => {
    getMovieReviews(location.state.movieId);
   
  }, []);
  
  const {results} = state;
   return (
        <div>
           {results !== undefined && results.length === 0 && (
              <h2>We don't have any reviews for this movie</h2> 
            )}
          
            <ul>
        {results &&
          results.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
            </ul>
        </div> 
    )
 }

 export default Reviews;
