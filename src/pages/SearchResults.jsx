import { CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import { searchMovie } from '../moviesAPI';
import MovieCard from '../components/MoviesCard';

export const SearchResults = ({}) => {
    const state = useSelector((state) => state);
    const { movieQuery } = state.movies;
    
    const debouncedSearch = useDebounce(movieQuery, 500);

    //https://tanstack.com/query/v3/docs/react/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
    const { isLoading, data: movieResults, isError, error } = useQuery({
        queryKey: ["searchMovie", debouncedSearch],
        queryFn: () => searchMovie(debouncedSearch),
        select: (movieResults) => (movieResults.results.slice(0,12))
      });

      if (isLoading) return <Container sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress/></Container>  ;
      else if (isError) return <div>Error: {error.message}</div>;

  return (
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
      { movieResults.length === 0 ? <Typography variant='h6'>Type your query...</Typography> : movieResults.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))} 

    </Container>
  );
}
