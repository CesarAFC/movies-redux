import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import NoImage from './NoImage';
import StarRating from './StarRating';

//https://developers.themoviedb.org/3/configuration/get-api-configuration

export default function MovieCard({movie}) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/movies/${movie.id}`); 
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
        <StarRating rate={movie.vote_average}/>
        <Typography variant="body2" color="text.secondary">
          {movie.overview ? movie.overview : "No description provided"}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" onClick={handleLearnMore}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}