import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { AnimalDetails } from "./components/pages/AnimalDetails";
import { Animals } from "././components/pages/Animals";
import {
  defaultValue,
  AnimalInterface,
  AnimalContext,
} from ".././src/contexts/AnimalContext";
import { LS_animals } from "./services/AnimalService";
import { NotFound } from "./components/NotFound";

//component
export const App = () => {
  const [animalsState, setAnimalsState] =
    useState<AnimalInterface>(defaultValue);

  //om det finns "animals" i ls, sätt den listan i state...
  //...annars, hämta listan från APIt och sätt den i state
  useEffect(() => {
    const animalStorage = localStorage.getItem(LS_animals);
    if (animalStorage) {
      setAnimalsState(JSON.parse(animalStorage));
    } else if (!animalStorage) {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((response) => response.json())
        .then((data) => setAnimalsState({ ...animalsState, animals: data }));
    }
  }, []);

  //OM animalState uppdateras OCH dens array är ÖVER 1 så sätts localstorage
  useEffect(() => {
    if (animalsState.animals.length < 1) return;
    localStorage.setItem(LS_animals, JSON.stringify(animalsState));
  }, [animalsState]);

  //MATA-KNAPPEN-FUNKTIONALITET: uppdaterar isFed till TRUE + uppdaterar lastFed till AKTUELL TID
  animalsState.feedAnimal = (id: number) => {
    let animals = [...animalsState.animals];

    animals[animals.findIndex((a) => a.id === id)].isFed = true;

    animals[animals.findIndex((a) => a.id === id)].lastFed =
      new Date().toString();

    setAnimalsState({ ...animalsState, animals: animals });
    localStorage.setItem(LS_animals, JSON.stringify(animals));
  };

  return (
    <AnimalContext.Provider value={animalsState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Animals />}></Route>
            <Route path="animals/:id" element={<AnimalDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimalContext.Provider>
  );
};
