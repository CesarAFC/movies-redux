import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import MovieCard from './MoviesCard';
import { readAllData } from '../actions';

const URL = 'https://api.themoviedb.org/3/search/movie?language=en-US&query=harry&include_adult=false';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDRjZWIxMDk2ZTFmM2NiY2NjYjVjNWJkYjE2MmE1OSIsInN1YiI6IjY0MzRlMjdkMDZmOTg0MDA5MjIyYzE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FIPTXZcrTin1pQ19bVW2bey8zrDhTAL5hIQXwU-EifI';
const Crud = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const {db} = state.movies
  console.log(db)
  //const [data, setData] = useState([]);
  
  function getInitialMovies() {
    const options = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
      },
  }

fetch(URL, options)
.then((res) => res.json())
.then((data) => {
dispatch(readAllData(data.results.slice(0,8)));
//setData(data.results.slice(0,8) );
});
  }

    useEffect(() => {
      getInitialMovies();
    }, []);
  
  return (
    <Container>
      <h1>Movies</h1>
      <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap', gap: 2}}>
        {db.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Container>
    </Container>
  );
}

export default Crud