import './App.css';
import {Provider} from 'react-redux';
import { Routes, Route } from "react-router-dom";
//import { store, persistor } from './store';
import configureStore from './store/configureStore';

import MovieDetails from './pages/MovieDetails';
import SearchBar from './components/SearchBar';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { SearchResults } from './pages/SearchResults';
import TopRatedList from './pages/TopRatedList';
import Crud from './pages/Crud';
import ErrorBoundary from './components/ErrorBoundary';
import UpcomingMovies from './pages/UpcomingMovies';
import FavoritesMovies from './pages/FavoritesMovies';
import { PersistGate } from 'redux-persist/integration/react'
import NotFound from './pages/NotFound';
// import Try from './components/Try';

const {store, persistor} = configureStore();

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Montserrat"', 'Open Sans'
    ].join(','),
  },
  status: {
    star: '#f4c518',
  },
  breakpoints: {
    values: {
      xs: 390,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <SearchBar />
            <Container sx={{ pt: 10 }} disableGutters>
              <Routes>
                <Route path="/" element={<Crud />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/top-rated" element={<TopRatedList />} />
                <Route path="/upcoming" element={<UpcomingMovies />} />
                <Route path="/my-favorites" element={<FavoritesMovies />} />
                {/* <Route path="/try" element={<Try />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </ErrorBoundary>
        </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App
