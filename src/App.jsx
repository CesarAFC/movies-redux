import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Crud from './components/Crud';

function App() {

  return (
    <>
      <Provider store={store}>
        <Crud /> 
      </Provider>
    </>
  );
}

export default App
