/* Componente que contiene los datos principales de cada elemento del resultado de la busqueda. */
import React, { useState } from "react";
import BackCardComponent from "./BackCardComponent";
import { StyledImg, StyledDiv } from "./Styles";

const CardComponent = (props) => {
  const { item } = props;
  const [isActive, setIsActive ] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const acivateCard = () =>{
    setIsActive(!isActive);
    setIsLoaded(true);
  }
  return (
    <StyledDiv onClick={acivateCard} className="relative mb-8">
      <div className={isActive ? "active flip" : "flip"}>
        <div className="flip-content">
          <div className="flip-front flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <StyledImg
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-left">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
          <BackCardComponent isLoaded={isLoaded} item={item} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default CardComponent;
