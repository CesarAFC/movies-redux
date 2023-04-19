import { READ_ALL_DATA } from "../types";

export const readAllData = (movies) => ({type: READ_ALL_DATA, payload: movies});