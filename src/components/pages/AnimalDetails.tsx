import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";
import { IAnimals } from "../../models/IAnimals";
import { LS_animal } from "../../services/AnimalService";

//styles
import {
  BGWrapper,
  ContentWrapper,
  ImageWrapper,
} from "../styledComponents/StyledWrappers";
import { StyledImage } from "../styledComponents/StyledImages";
import { StyledHeadings } from "../styledComponents/StyledHeadings";
import { StyledParagraphs } from "../styledComponents/StyledParagraphs";
import { StyledButton } from "../styledComponents/StyledButton";

//component
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
          localStorage.setItem(LS_animal, JSON.stringify(singleAnimal));
        }
      }
    }
  }, []);

  return (
    <BGWrapper>
      <ContentWrapper>
        <Link to="/">Tillbaka till alla djur</Link>

        <StyledHeadings> Namn: {singleAnimal.name}</StyledHeadings>

        <p>Född år: {singleAnimal.yearOfBirth}</p>
        <ImageWrapper>
          <StyledImage
            src={singleAnimal.imageUrl}
            alt={singleAnimal.name}
          ></StyledImage>
        </ImageWrapper>
        <StyledParagraphs>Om: {singleAnimal.shortDescription}</StyledParagraphs>

        <StyledParagraphs>
          Om rasen: {singleAnimal.longDescription}
        </StyledParagraphs>

        <StyledButton
          onClick={() => animal.feedAnimal(singleAnimal.id)}
          disabled={singleAnimal.isFed}
        >
          Mata {singleAnimal.name}
        </StyledButton>
        <p>
          {singleAnimal.name} fick sin mat {singleAnimal.lastFed}
        </p>
      </ContentWrapper>
    </BGWrapper>
  );
};
