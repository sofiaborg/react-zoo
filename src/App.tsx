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
import { LS_KEY } from "./services/AnimalService";

export const App = () => {
  const [animalsState, setAnimalsState] =
    useState<AnimalInterface>(defaultValue);

  useEffect(() => {
    const animalStorage = localStorage.getItem(LS_KEY);
    if (animalStorage) {
      setAnimalsState(JSON.parse(animalStorage));
    } else if (!animalStorage) {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((response) => response.json())
        .then((data) => setAnimalsState({ ...animalsState, animals: data }));
    }
  }, []);

  //OM animalState uppdateras OCH dens array är ÖVER 1 så körs nedan funktion
  useEffect(() => {
    if (animalsState.animals.length < 1) return;
    localStorage.setItem(LS_KEY, JSON.stringify(animalsState));
  }, [animalsState]);

  //hantera "mata"-knappen: uppdaterar isFed till TRUE samt lastFed till TID
  animalsState.feedAnimal = (id: number) => {
    let animals = [...animalsState.animals];

    animals[animals.findIndex((a) => a.id === id)].isFed = true;

    animals[animals.findIndex((a) => a.id === id)].lastFed =
      Date.now.toString();

    setAnimalsState({ ...animalsState, animals: animals });
    localStorage.setItem(LS_KEY, JSON.stringify(animals));
  };

  //sätt tiden för när matning senast gjorts
  return (
    <div>
      <AnimalContext.Provider value={animalsState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Animals />}></Route>
              <Route path="/:id" element={<AnimalDetails />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimalContext.Provider>
    </div>
  );
};
