import axios from 'axios';

const ApiKey = 'd20a8e5c8f0d731d1e72350cb6ebee45'

export const fetchMovieTrending = () => {
    return axios 
        .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`)
        .then(response => response.data.results)
        .catch(error => error)
    
}

export const findFilm = (search) => {
    return axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${search}&include_adult=false`)
        .then(response => response.data)
    .catch(error => error)
} 

export const fetchMovieDetails = (id) => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US&append_to_response=video`)
        //mistake
        .then(response => response.data)
        .catch(error => error)
}

export const fetchMovieCast = (id) => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=en-US`)
        //mistake
        .then(response => response.data)
    .catch(error => error)
}

export const fetchMovieReviews = (id) => {
    return axios
        .get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`)
        .then(response => response.data)
        .catch(error => error)
} 



