import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { readDetails } from '../actions';
import { API_KEY } from '../keys';

const MovieDetails = () => {
    const { id } = useParams();
    const URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {details} = state.movies;

    const getMoviesDetails = () => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
    }
  
  fetch(URL, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    dispatch(readDetails(data));
  });
  }

    useEffect(() => {
        getMoviesDetails();
    }, []);
    
    console.log(details)
  return (
    <div>MovieDetails {details.title}</div>
  )
}

export default MovieDetails