import { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import NoImage from './NoImage';
import StarRating from './StarRating';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, ClearFromFavorites } from '../actions';

//https://developers.themoviedb.org/3/configuration/get-api-configuration

export default function MovieCard({movie}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {favorites} = state.movies;
   
  const isInFavorites = useMemo(() => {
    let movieInFavorites = favorites.find((elem) => elem.id === movie.id);
    return movieInFavorites;
  }, [favorites]);
  
  const handleLearnMore = () => {
    navigate(`/movies/${movie.id}`); 
  }
  const handleFavorite = () => {
    dispatch(addToFavorites(movie));
  }
  const handleNoFavorite = () => {
    dispatch(ClearFromFavorites(movie.id));
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {movie.backdrop_path ? (
        <CardMedia
          sx={{ height: 140 }}
          image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          title={movie.title}
        />
      ) : (
        <NoImage />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <StarRating rate={movie.vote_average} />
        <Typography variant="body2" color="text.secondary">
          {movie.overview ? movie.overview : "No description provided"}
        </Typography>
      </CardContent>
      <CardActions>
        {!isInFavorites ? (
          <Button size="small" onClick={handleFavorite}>
            <FavoriteBorderIcon />
          </Button>
        ) : (
          <Button size="small" onClick={handleNoFavorite}>
            <FavoriteIcon />
          </Button>
        )}
        <Button size="small" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}