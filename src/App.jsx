import './App.css';
import {Provider} from 'react-redux';
import { Routes, Route } from "react-router-dom";
import store from './store';
import MovieDetails from './pages/MovieDetails';
import SearchBar from './components/SearchBar';
import { Container } from '@mui/material';
import { SearchResults } from './pages/SearchResults';
import TopRatedList from './pages/TopRatedList';
import Crud from './pages/Crud';
import ErrorBoundary from './components/ErrorBoundary';
import UpcomingMovies from './pages/UpcomingMovies';

function App() {

  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <SearchBar />
          <Container sx={{ pt: 10 }} disableGutters>
            <Routes>
              <Route path="/" element={<Crud />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/top-rated" element={<TopRatedList />} />
              <Route path="/upcoming" element={<UpcomingMovies />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Container>
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App
