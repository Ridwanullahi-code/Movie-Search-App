import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requests from '../../functions/requests';

const state = {
  movies: [],
  status: null,
};

export const fetchMovies = createAsyncThunk(
  'fetch/movies',
  async () => {
    const request = await axios.get(requests.movies);
    const result = request.data.results;
    return result;
  },
);

const movieSlicer = createSlice({
  name: 'Movies',
  initialState: state,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => ({
      ...state, status: 'pending',
    }))
      .addCase(fetchMovies.rejected, (state) => ({
        ...state, status: 'rejected',
      }))
      .addCase(fetchMovies.fulfilled, (state, { payload }) => ({
        ...state,
        movies: payload,
        status: 'fulfilled',
      }));
  },
});

export default movieSlicer.reducer;
