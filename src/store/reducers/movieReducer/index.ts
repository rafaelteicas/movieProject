import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MovieType } from '../../../types/movieType'

interface MovieStore {
    movie?: MovieType
}

const initialState: any = {
    movie: undefined,
}

export const movieSlicer = createSlice({
  name: 'movieReducer',
  initialState,
  reducers: {
    setMovieAction: (state, action: PayloadAction<MovieType>) => {
      state.movie = action.payload
    },
  },
})

export const { setMovieAction } = movieSlicer.actions

export default movieSlicer.reducer