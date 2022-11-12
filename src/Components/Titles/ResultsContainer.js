/* Componente que recibe solamente el listado de resultados obtenidos y mapea en el componente de la tarjeta de informacion. */
import React from "react";
import CardComponent from "../Titles/CardComponent";
import LoaderCardComponent from "./LoaderCardComponent";

const ResultsContainerComponent = (props) => {
  const { list, isLoading } = props;
  return (
    <>
      {!isLoading ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm::grid-cols-1 gap-4 p-8">
          {list.map((x) => {
            return <CardComponent key={x.id} item={x}></CardComponent>;
          })}
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm::grid-cols-1 gap-4 p-8">
          {
            Array.apply(null, { length: 9 }).map((e, i) => (
              <LoaderCardComponent key={i}/>
            ))
          }
        </div>
      )}
    </>
  );
};

export default ResultsContainerComponent;
