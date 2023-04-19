import { READ_ALL_DATA } from "../types";

const initialState = {
    db: []
};

export default function moviesReducer ( state = initialState, action) {
    switch (action.type) {
        case READ_ALL_DATA:
            return {
              ...state,
              db: action.payload,
            };
    
        default:
            return initialState;
    }
}