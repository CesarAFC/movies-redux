import { createStore } from "redux";
import reducer from "../reducer";

const store = createStore(reducer);

function logState() {
    console.log('Current state:', store.getState());
  }

store.subscribe(logState);

export default store;