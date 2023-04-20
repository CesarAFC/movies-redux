import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import MovieCard from './MoviesCard';
import { readAllData } from '../actions';
import { API_KEY } from '../keys';

//const URL = 'https://api.themoviedb.org/3/search/movie?language=en-US&query=harry&include_adult=false';
const URL = 'https://api.themoviedb.org/3/trending/movie/week';

const Crud = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {db} = state.movies
  
  function getInitialMovies() {
    const options = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
      },
  }

fetch(URL, options)
.then((res) => res.json())
.then((data) => {
  dispatch(readAllData(data.results.slice(0, 8)));
});
  }

    useEffect(() => {
      getInitialMovies();
    }, []);
  
  return (
    <Container>
      <Typography variant='h3'>Trending movies Movies</Typography>
      <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
        {db.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
    </Container>
  );
}

export default Crud