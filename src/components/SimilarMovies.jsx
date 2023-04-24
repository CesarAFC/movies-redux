import { Box, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { getSimilarMovies } from '../moviesAPI'
import MovieCardSkeleton from './MovieCardSkeleton'
import SimilarCard from './SimilarCard'

const SimilarMovies = ({movieId}) => {
    const {isLoading, data: movies, isError, error} = useQuery({
      queryKey: ["similarMovies", movieId],
      queryFn: () => getSimilarMovies(movieId),
      select: (movies) => movies.results.slice(0, 5),
    });

    if( isLoading) return <MovieCardSkeleton/>
    else if( isError ) return <div>Error: {error.message}</div>

  return (
    <>
        <Typography variant="h4" sx={{ pt: 4, pb: 2 }}>
          More like this
        </Typography>
      <Box sx={{ width: "100%", display: "flex", gap: 2, justifyContent: 'center' }}>
        {movies.map((movie) => (
          <SimilarCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rate={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </Box>
    </>
  );
}

export default SimilarMovies