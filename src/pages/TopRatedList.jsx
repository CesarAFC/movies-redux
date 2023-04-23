import { CircularProgress, Container, Typography } from '@mui/material';
import React from 'react'
import { useQuery } from 'react-query';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import MovieCard from '../components/MoviesCard';
import { getTopRatedMovies } from '../moviesAPI';

const TopRatedList = () => {

    const { isLoading, data: movies, isError, error } = useQuery({
        queryKey: ["topRatedMovie"],
        queryFn: () => getTopRatedMovies(),
        select: (movies) => (movies.results.slice(0,12))
      });

      if (isLoading) return <MovieCardSkeleton/>;
      else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
    <Typography variant='h3' sx={{textAlign: 'center'}} pb={2}>Top-Rated Movies</Typography>
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
        { movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))} 
    </Container>
    </>
  )
}

export default TopRatedList