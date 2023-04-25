import { ADD_TO_FAVORITES, CLEAR_QUERY, DELETE_FROM_FAVORITES, READ_ALL_DATA, READ_DETAIL_DATA, READ_QUERY } from "../types";

const initialState = {
    // db: [],
    // details: {},
    movieQuery: "",
    favorites: [],
};

export default function moviesReducer ( state = initialState, action) {
    switch (action.type) {
        // case READ_ALL_DATA:
        //     return {
        //       ...state,
        //       db: action.payload,
        //     };
        // case READ_DETAIL_DATA:
        //     return {
        //       ...state,
        //       details: action.payload,
        //    };
        case READ_QUERY:
            return {
                ...state,
                movieQuery: action.payload,
            };
        case CLEAR_QUERY:
            return {
                ...state,
                movieQuery: "",
            };
        case ADD_TO_FAVORITES:
            let movieInFavorites = state.favorites.find( (movie) => movie.id === action.payload.id);
            return movieInFavorites ? {
                ...state,
            } : {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.id !== action.payload),
            };
    
        default:
            return initialState;
    }
}