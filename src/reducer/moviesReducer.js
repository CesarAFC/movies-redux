import { READ_ALL_DATA, READ_DETAIL_DATA } from "../types";

const initialState = {
    db: [],
    details: {},
};

export default function moviesReducer ( state = initialState, action) {
    switch (action.type) {
        case READ_ALL_DATA:
            return {
              ...state,
              db: action.payload,
            };
        case READ_DETAIL_DATA:
            return {
              ...state,
              details: action.payload,
            };
    
        default:
            return initialState;
    }
}