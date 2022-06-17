import { IAnimals } from "./../models/IAnimals";
import { createContext } from "react";

export interface AnimalInterface {
  animals: IAnimals[];
  feedAnimal(id: number): void;
  updateFed(id: number): void;
}

export const defaultValue: AnimalInterface = {
  animals: [],
  feedAnimal: (id: number) => {},
  updateFed: (id: number) => {},
};

export const AnimalContext = createContext(defaultValue);
