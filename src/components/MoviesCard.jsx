import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

//https://developers.themoviedb.org/3/configuration/get-api-configuration

export default function MovieCard({movie}) {

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/movies/${movie.id}`); 
  }
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
      <CardMedia
        sx={{ height: 140 }}
        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        title={movie.title}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
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