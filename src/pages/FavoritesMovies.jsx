import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MoviesCard';
import PageComponent from '../components/PageComponent';

const FavoritesMovies = () => {

  const state = useSelector((state) => state);
  const {favorites} = state.movies;

  return (
    // <>
    //     <Typography variant='h3' sx={{textAlign: 'center', fontWeight: 700}} pb={2}>Favorites</Typography>
    //     <Container
    //     sx={{
    //         display: "flex",
    //         flexDirection: "row",
    //         justifyContent: "center",
    //         flexWrap: "wrap",
    //         gap: 2,
    //     }}
    //     >
    //     {favorites.length === 0 ? (
    //         <Typography variant="h6">No Favorites yet</Typography>
    //     ) : (
    //         favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
    //     )}
    //     </Container>
    // </>
    <PageComponent title='Favorites'>
        {favorites.length === 0 ? (
            <Typography variant="h6">No Favorites yet</Typography>
        ) : (
        favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
    </PageComponent>

  );
}

export default FavoritesMovies