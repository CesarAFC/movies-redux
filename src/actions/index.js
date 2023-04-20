import { READ_ALL_DATA, READ_DETAIL_DATA } from "../types";

export const readAllData = (movies) => ({type: READ_ALL_DATA, payload: movies});
export const readDetails = (movies) => ({type: READ_DETAIL_DATA, payload: movies});