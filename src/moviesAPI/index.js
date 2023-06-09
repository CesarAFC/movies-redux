import { API_KEY } from "../keys";

const options = {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
  },
}
const BASE_URL = 'https://api.themoviedb.org/3/'

export const getInitialMovies = () => {
  const URL = "https://api.themoviedb.org/3/trending/movie/week";
  return fetch(URL, options).then((res) => res.json());
}

export const getMoviesDetails = (id) => {
  const URL = `${BASE_URL}movie/${id}?language=en-US`;
  return fetch(URL, options).then((res) => res.json())
}
export const getMovieProvider = (id) => {
  const URL = `${BASE_URL}movie/${id}/watch/providers?watch_region=US`
  return fetch(URL, options).then((res) => res.json())
}
export const getMovieCredits = (id) => {
  const URL = `${BASE_URL}movie/${id}/credits?language=en-US`;
  return fetch(URL, options).then((res) => res.json())
}

export const searchMovie = (query) => {
  const URL = `${BASE_URL}search/movie?language=en-US&query=${query}&page=1&include_adult=false`;
  return fetch(URL, options).then((res) => res.json());
}

export const getTopRatedMovies = () => {
  const URL = `${BASE_URL}movie/top_rated?language=en-US&page=1&region=US`
  return fetch(URL, options).then((res) => res.json());
}
export const getUpcomingMovies = () => {
  const URL = `${BASE_URL}movie/upcoming?language=en-US&page=1&region=US`
  return fetch(URL, options).then((res) => res.json());
}
export const getSimilarMovies = (id) => {
  const URL = `${BASE_URL}movie/${id}/similar?language=en-US&page=1&region=US`;
  return fetch(URL, options).then((res) => res.json());
}