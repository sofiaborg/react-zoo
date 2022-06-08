import React from "react";

import { Link } from "react-router-dom";
import { IAnimals } from "../../models/IAnimals";

interface IAnimalDetailsProps {
  animal: IAnimals;
  feed(id: number): void;
}

export const AnimalDetails = (props: IAnimalDetailsProps) => {
  return (
    <div>
      <Link to="/">back to all animals</Link>
      <h1>{props.animal.name}</h1>
      <img src={props.animal.imageUrl} alt="" />
      <p>{props.animal.yearOfBirth}</p>
      <p>{props.animal.shortDescription}</p>
    </div>
  );
};
