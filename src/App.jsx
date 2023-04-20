import './App.css';
import {Provider} from 'react-redux';
import { Routes, Route } from "react-router-dom";
import store from './store';
import Crud from './components/Crud';
import MovieDetails from './components/MovieDetails';

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Provider>
    </>
  );
}

export default App
