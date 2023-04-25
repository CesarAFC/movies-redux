import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MoviesCard';

const FavoritesMovies = () => {

  const state = useSelector((state) => state);
  const {favorites} = state.movies;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {favorites.length === 0 ? (
        <Typography variant="h6">No Favorites yet</Typography>
      ) : (
        favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </Container>
  );
}

export default FavoritesMovies