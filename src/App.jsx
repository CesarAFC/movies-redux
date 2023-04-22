import './App.css';
import {Provider} from 'react-redux';
import { Routes, Route } from "react-router-dom";
import store from './store';
import Crud from './components/Crud';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import { Container } from '@mui/material';
import { SearchResults } from './components/SearchResults';

function App() {

  return (
    <>
      <Provider store={store}>
        <SearchBar />
        <Container sx={{ pt: 10 }} disableGutters>
          <Routes>
            <Route path="/" element={<Crud />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Container>
      </Provider>
    </>
  );
}

export default App
