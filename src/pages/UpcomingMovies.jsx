import { Container, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from 'react-query';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import MovieCard from '../components/MoviesCard';
import { getUpcomingMovies } from '../moviesAPI';

const UpcomingMovies = () => {

    const { isLoading, data: movies, isError, error } = useQuery({
        queryKey: ["topUpcomingovies"],
        queryFn: () => getUpcomingMovies(),
        select: (movies) => (movies.results.slice(0,12))
      });

      if (isLoading) return <MovieCardSkeleton/>;
      else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
    <Typography variant='h3' sx={{textAlign: 'center'}} pb={2}>Upcoming Movies</Typography>
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
        { movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))} 
    </Container>
    </>
  )
}

export default UpcomingMovies;