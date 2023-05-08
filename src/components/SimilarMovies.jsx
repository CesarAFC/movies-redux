import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import { getSimilarMovies } from '../moviesAPI'
import MovieCardSkeleton from './MovieCardSkeleton'
import SimilarCard from './SimilarCard'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SimilarMovieSkeleton from './SimilarMovieSkeleton'

const SimilarMovies = ({movieId}) => {
    const {isLoading, data: movies, isError, error} = useQuery({
      queryKey: ["similarMovies", movieId],
      queryFn: () => getSimilarMovies(movieId),
      select: (movies) => movies.results.slice(0, 5),
    });

    const options = {
      perPage: 5,
      gap: "5rem",
      height: '450px',
      padding: '5rem',
      // rewindByDrag: true,
      focus: 'center',
      start: 3,
      type: 'loop',
      mediaQuery: 'max',
      breakpoints: {
        500: {
          perPage: 1,
          gap: "5rem",
        },
        700: {
          perPage: 2,
          gap: "5rem",
        },
        900: {
          perPage: 3,
          gap: "6rem",
        },
        1100: {
          perPage: 4,
        }
      }
    }

    if( isLoading) return <SimilarMovieSkeleton/>
    else if( isError ) return <div>Error: {error.message}</div>

  return (
    <Container disableGutters>
      <Typography variant="h4" sx={{ pt: 4, pb: 2 }}>
        More like this
      </Typography>

{ movies.length && <Box sx={{ width: '100%' }}>
        <Splide
          aria-label="More like this"
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
      </Box>}

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