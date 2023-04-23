import { Box, Chip, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useQueries } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { readDetails } from '../actions';
import { API_KEY } from '../keys';
import { getMovieProvider, getMoviesDetails } from '../moviesAPI';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieProviders from '../components/MovieProviders';
import Ratings from '../components/Ratings';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    //const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    //const state = useSelector(state => state);
    //const dispatch = useDispatch();
    //const {details} = state.movies;

    // const { isLoading, data: details, isError, error } = useQuery({
    //   queryKey: ["detailsMovies"],
    //   queryFn: () => getMoviesDetails(id),
    // });

    const results = useQueries([
      { queryKey: ["detailsMovies"], queryFn: () => getMoviesDetails(id) },
      { queryKey: ["detailsMoviesProviders"], queryFn: () => getMovieProvider(id) },
    ])

    const [detailsMovies, detailsMoviesProviders] = results; 
    const {isLoading, data: details, isError, error} = detailsMovies; 
    const {data: providers} = detailsMoviesProviders; 

    const handleBack = () => {
      navigate(-1)
    }

    if( isLoading) return <div>Loading...</div>
    else if( isError ) return <div>Error: {error.message}</div>

    //Validate if all the promises are fulfilled
    const moviesListas = results.some(query => query.isLoading);

    const providersArrary = (!moviesListas || providers) ? providers?.results.US?.buy : [];

    // const getMoviesDetails = () => {
    //   const options = {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${API_KEY}`,
    //     },
    //   };
    //   fetch(URL, options)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       dispatch(readDetails(data));
    //     });
    // }
    // useEffect(() => {
    //     getMoviesDetails();
    // }, []);

  return (
    <Container>
      <Box sx={{display: 'flex', gap: 1}}>
        <IconButton  onClick={handleBack} sx={{ color: '#000', width: 40}} >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" >Details</Typography>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <Typography variant="h2">{details.title}</Typography>
          <Typography sx={{ pb: 2 }}>{details.tagline}</Typography>
        </div>
        <Ratings rate={details.vote_average} totalVotes={details.vote_count} />
      </Box>

      <Stack direction="row" spacing={1}>
        <Typography variant="caption">
          {details.release_date.slice(0, 4)}
        </Typography>
        <Typography variant="caption">{`${details.runtime} mins`}</Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        {isLoading ? (
          ""
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            width="200"
            height="300"
          />
        )}
        <Box>
          <Typography variant="body1" sx={{pb: 2}}>{details.overview ? details.overview : 'No overview provided' }</Typography>
          <Stack direction="row" spacing={1}>
            {details.genres.map((genre) => (
              <Chip key={genre.id} label={genre.name} />
            ))}
          </Stack>
        </Box>
      </Box>
      <MovieProviders providersArrary={providersArrary} />
    </Container>
  );
}

export default MovieDetails