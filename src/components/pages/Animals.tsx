import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";
import { AnimalDetails } from "./AnimalDetails";

export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <div>
      {animals.animals.map((animal) => {
        return (
          <>
            <Link to={"/" + animal.id} key={animal.id}>
              <div>
                <p>{animal.name}</p>
                <img src={animal.imageUrl} alt={animal.name} />
                <p>{animal.shortDescription}</p>
              </div>
            </Link>
            <AnimalDetails animal={animal} feed={animals.feedAnimal} />
          </>
        );
      })}
    </div>
  );
};
