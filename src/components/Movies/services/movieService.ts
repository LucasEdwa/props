import { IMovie } from "../../../models/IMovies";
import { IOmdbResponse } from "../../../models/IOmdbResponse";
import { get } from "./serviceBase";


const BASE_URL = 'http://www.omdbapi.com/?apikey=1efdfa84';

export const getMovies = async () =>{
    const data = await get<IOmdbResponse>(`${BASE_URL}&s=star`);
    console.log(data, 'result');
    return data.Search;
};
export const getMoviesById = async (id:string) =>{
    const data = await get<IMovie>(`${BASE_URL}i=${id}`);
    return data;
};