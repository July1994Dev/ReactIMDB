/* Componente en el que se engloba el funcionamiento de la busqueda, este recibe solamente el metodo que actualiza el estado de los resultados y hace la llamada al API. */
import React, { useState, useRef } from "react";
import { SearchMovies } from "../../Services/Movies";

const SearchComponent = (props) => {
  const [keySearch, setKeySearch] = useState("");
  const textSearch = useRef(null);
  const { updateList, setIsLoading } = props;

  const search = (e) => {
    if (e.key === "Enter" ) {
      if(!keySearch){
        alert("Ingresa una busqueda valida");
        return;
      }
      showSearch();
      setIsLoading(true);
      SearchMovies(keySearch).then((result) => {
          if (result.data) {
            setKeySearch("");
            updateList(result.data.results);
            setIsLoading(false);
          }
        }).catch((error) => {});
    }
  };

  const handleChange = (e) => {
    setKeySearch(e.target.value);
  };

  const showSearch = () => {
    let item = textSearch.current.classList;
    let isHidden = item.contains("hidden");
    if (isHidden) {
      item.remove("hidden");
      textSearch.current.firstChild.firstChild.focus();
    } else {
      item.add("hidden");
    }
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav id="header" className="w-full">
        <div className="relative w-full z-10 fixed top-0 bg-gray-200 border-b border-grey-light">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-4">
            <div className="pl-4 flex items-center">
              <span
                className="text-teal-700 text-base no-underline hover:no-underline font-extrabold text-xl"
                href="#"
              >
                {" "}
                Peliculas
              </span>
              <div
                id="search-toggle"
                className="search-icon cursor-pointer pl-6"
                onClick={showSearch}
              >
                <svg
                  className="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full hidden bg-white shadow-xl"
          id="search-content"
          ref={textSearch}
        >
          <div className="container mx-auto py-4 text-black">
            <input
              id="searchfield"
              type="search"
              placeholder="Escribe el nombre de la pelicula que deseas buscar."
              onChange={handleChange}
              onKeyDown={search}
              value={keySearch}
              className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchComponent;