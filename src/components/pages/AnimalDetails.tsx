import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  defaultValue,
  AnimalInterface,
  AnimalContext,
} from "../../contexts/AnimalContext";
import { IAnimals } from "../../models/IAnimals";

export const AnimalDetails = () => {
  const animal = useContext(AnimalContext);

  const [singleAnimal, setSingleAnimal] = useState<IAnimals>({
    id: 0,
    name: "",
    imageUrl: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    isFed: false,
    lastFed: "",
  });

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      for (let i = 0; i < animal.animals.length; i++) {
        if (animal.animals[i].id === parseInt(params.id)) {
          setSingleAnimal(animal.animals[i]);
        }
      }
    }
  }, []);

  return (
    <div>
      <Link to="/">Tillbaka till alla djur</Link>
      <p>Namn: {singleAnimal.name}</p>
      <p>Född år: {singleAnimal.yearOfBirth}</p>
      <img src={singleAnimal.imageUrl} alt={singleAnimal.name} />
      <p>Om Frille: {singleAnimal.shortDescription}</p>
      <p>Om rasen: {singleAnimal.longDescription}</p>
      <button onClick={() => animal.feedAnimal(singleAnimal.id)}>
        Mata {singleAnimal.name}
      </button>
      <p>{singleAnimal.lastFed}</p>
    </div>
  );
};
