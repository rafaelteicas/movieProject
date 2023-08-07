import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks'
import {  setMovieAction } from '.';
import { MovieType } from '../../../types/movieType';

export const useMovieReducer = () => {
    const dispatch = useDispatch();

    const {movie} = useSelector((state) => state.movieReducer);

    const setMovie = (currentMovie: MovieType) => {
        dispatch(setMovieAction(currentMovie))
    }

    return {
        movie,
        setMovie
    }
}