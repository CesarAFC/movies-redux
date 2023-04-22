import { CLEAR_QUERY, READ_ALL_DATA, READ_DETAIL_DATA, READ_QUERY } from "../types";

export const readAllData = (movies) => ({type: READ_ALL_DATA, payload: movies});
export const readDetails = (movies) => ({type: READ_DETAIL_DATA, payload: movies});
export const readQuery = (query) => ({type: READ_QUERY, payload: query});
export const clearQuery = () => ({type: CLEAR_QUERY});