import { createStore } from "redux";
import reducer from "../reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }



function logState() {
  //console.log('Current state:', store.getState());
}

store.subscribe(logState);

//export default store;