import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducer from "../reducer";
 
//import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['movies'],
  // stateReconciler: hardSet,
}
 
const persistedReducer = persistReducer(persistConfig, reducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}