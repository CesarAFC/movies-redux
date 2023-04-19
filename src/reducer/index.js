import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const reducer = combineReducers({
    movies: moviesReducer,
});

export default reducer;