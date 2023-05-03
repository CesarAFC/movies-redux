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
import { Box } from '@mui/material';

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
  
  const handleLearnMore = (e) => {
    e.stopPropagation();
    navigate(`/movies/${movie.id}`); 
  }
  const handleFavorite = (e) => {
    e.stopPropagation();
    dispatch(addToFavorites(movie));
  }
  const handleNoFavorite = (e) => {
    e.stopPropagation();
    dispatch(ClearFromFavorites(movie.id));
  }
  return (
    <Card
      sx={{
        cursor: 'pointer',
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={handleLearnMore}
    >
      {movie.backdrop_path ? (
        <CardMedia
          sx={{ height: 140 }}
          image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          title={movie.title}
        />
      ) : (
        <NoImage width={345} height={140} />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <StarRating rate={movie.vote_average} />


          <Typography variant="body2" color="text.secondary" sx={{height: 140, overflow: 'hidden'}} className='overview--card'>
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