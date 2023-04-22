import { CLEAR_QUERY, READ_ALL_DATA, READ_DETAIL_DATA, READ_QUERY } from "../types";

const initialState = {
    // db: [],
    // details: {},
    movieQuery: "",
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
    
        default:
            return initialState;
    }
}