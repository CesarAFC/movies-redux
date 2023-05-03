import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { getSimilarMovies } from '../moviesAPI'
import MovieCardSkeleton from './MovieCardSkeleton'
import SimilarCard from './SimilarCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const SimilarMovies = ({movieId}) => {
    const {isLoading, data: movies, isError, error} = useQuery({
      queryKey: ["similarMovies", movieId],
      queryFn: () => getSimilarMovies(movieId),
      select: (movies) => movies.results.slice(0, 5),
    });

    const options = {
      perPage: 2,
      gap: "1rem",
      height: '400px',
      padding: '5rem',
      rewindByDrag: true,
      focus: 'center',
      type: 'loop',
      mediaQuery: 'min',
      breakpoints: {
        700: {
          perPage: 5,
          gap: "4rem",
        },
      }
    }

    if( isLoading) return <MovieCardSkeleton/>
    else if( isError ) return <div>Error: {error.message}</div>

  return (
    <Container disableGutters>
      <Typography variant="h4" sx={{ pt: 4, pb: 2 }}>
        More like this
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Splide
          aria-label="My Favorite Images"
          options={options}
        >
          {movies.map((movie) => (
            <SimilarCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </Splide>
      </Box>

      {/* <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
          <SimilarCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rate={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </Box> */}
    </Container>
  );
}

export default SimilarMovies