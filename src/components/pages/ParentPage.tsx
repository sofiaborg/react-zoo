// import React, { useEffect, useState } from "react";
// import { Animals } from "./Animals";
// import {
//   defaultValue,
//   AnimalInterface,
//   AnimalContext,
// } from "../../contexts/AnimalContext";

export const ParentPage = () => {
  //   const [animalsState, setAnimalsState] =
  //     useState<AnimalInterface>(defaultValue);

  //   //hämta djuren och set State
  //   useEffect(() => {
  //     fetch("https://animals.azurewebsites.net/api/animals")
  //       .then((response) => response.json())
  //       .then((data) => setAnimalsState({ ...animalsState, animals: data }));
  //   }, []);

  //   //toggla booleanvariabeln "isFed" mellan true och false
  //   animalsState.feedAnimal = (id: number) => {
  //     let animals = [...animalsState.animals];

  //     animals[animals.findIndex((a) => a.id === id)].isFed =
  //       !animals[animals.findIndex((a) => a.id === id)].isFed;

  //     setAnimalsState({ ...animalsState, animals: animals });

  return (
    <div></div>
    //     <AnimalContext.Provider value={animalsState}>
    //       <Animals />
    //     </AnimalContext.Provider>
  );
  // };
};
