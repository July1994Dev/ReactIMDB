/* Componente que contiene los datos principales de cada elemento del resultado de la busqueda. */
import React, { useEffect, useState } from "react";
import { StyledImg } from "./Styles";
import { MovieInfo } from "../../Services/Movies";

const BackCardComponent = (props) => {
  const { item, isLoaded } = props;
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    if (isLoaded && movieData !== {}) {
      MovieInfo(item.id).then((result) => {
        setMovieData(result.data);
      });
    }
  }, [isLoaded]);

  return (
    <div className="absolute top-0 left-0 w-full flip-back">
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <StyledImg
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={item.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Titulo: </strong> {movieData.title}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Tipo: </strong> {movieData.type}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Año: </strong> {movieData.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackCardComponent;
