/* Se instalo Axios para realizar peticiones, en este archivo se construyen las promesas solamente para poder ser ejecutadas posteriormente, aca se importan las variables necesarias para consumir el servicio. */
import axios from "axios";
import { key, url } from "../Utils/Variables";

const SearchMovies = (name) => {
  return axios.get(`${url}/SearchMovie/${key}/${name}`);
};

const MovieInfo = (id) => {
  return axios.get(`${url}/Ratings/${key}/${id}`);
};

export { SearchMovies, MovieInfo };
