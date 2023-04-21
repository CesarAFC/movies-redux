import { API_KEY } from "../keys";

const options = {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
  },
}
export const getInitialMovies = () => {
  const URL = "https://api.themoviedb.org/3/trending/movie/week";
  return fetch(URL, options).then((res) => res.json());
}

export const getMoviesDetails = (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  return fetch(URL, options).then((res) => res.json())
}


export const getMovieProvider = (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/watch/providers?watch_region=US`
  return fetch(URL, options).then((res) => res.json())
}