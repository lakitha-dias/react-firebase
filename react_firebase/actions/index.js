import {ADD_MOVIE, FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEED} from "./actionTypes";


export  const  fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}

export const addMovieAction  = (newMovie) => {
    return {
        type: ADD_MOVIE,
        // newMovie: newMovie
        newMovie
    }
}

// Action sent by the redux  saga
export const fetchSuccessAction  = {reciveMovies}  => {
    return {
        type: FETCH_SUCCEED,
        reciveMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}