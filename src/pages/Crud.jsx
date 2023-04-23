// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { readAllData } from '../actions';
// import { API_KEY } from '../keys';
import { Container, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { getInitialMovies } from '../moviesAPI';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import MovieCard from '../components/MoviesCard';

const URL = 'https://api.themoviedb.org/3/trending/movie/week';

const Crud = () => {
  // const state = useSelector(state => state);
  // const dispatch = useDispatch();
  // const {db} = state.movies;

  const { isLoading, data: movies, isError, error } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => getInitialMovies(),
    select: (movies) => (movies.results.slice(0,12))
  });

  if( isLoading) return <MovieCardSkeleton/>
  // if( true) return <MovieCardSkeleton/>
  else if( isError ) return <div>Error: {error.message}</div>
  
//   function getInitialMovies() {
//     const options = {
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${API_KEY}`,
//       },
//   }

// fetch(URL, options)
// .then((res) => res.json())
// .then((data) => {
//   dispatch(readAllData(data.results.slice(0, 8)));
// });
//   }

    // useEffect(() => {
    //   getInitialMovies();
    // }, []);
  
  return (
    <Container>
      <Typography variant='h3' sx={{textAlign: 'center'}} pb={2}>Trending Movies</Typography>
      <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
    </Container>
  );
}

export default Crud