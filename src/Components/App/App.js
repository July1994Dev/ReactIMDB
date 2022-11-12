/* Componente inicial en el que se renderizan las peliculas. */

import SearchComponent from "../Navigation/Search";
import { useState } from "react";
import ResultsContainerComponent from "../Titles/ResultsContainer";

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <SearchComponent setIsLoading={setIsLoading} updateList={setMoviesList} />
      <ResultsContainerComponent isLoading={isLoading} list={moviesList}/>
    </>
  );
};

export default App;
