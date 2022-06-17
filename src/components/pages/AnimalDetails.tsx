import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";
import { IAnimals } from "../../models/IAnimals";
import { LS_animal } from "../../services/AnimalService";
import { Link } from "react-router-dom";

//styles
import {
  Wrapper,
  ContentWrapper,
  SingleAnimalWrapper,
} from "../styledComponents/StyledWrappers";
import { StyledButton, StyledDisable } from "../styledComponents/StyledButton";
import { StyledImage, ImageWrapper } from "../styledComponents/StyledImages";
import { StyledAlink } from "../styledComponents/StyledNavigation";
import {
  StyledH1,
  StyledH5,
  StyledParagraphs,
} from "../styledComponents/StyledText";
const errorImg = require("../../assets/onError.jpg");

//component
export const AnimalDetails = () => {
  const animal = useContext(AnimalContext);

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = errorImg;
  };

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
    if (singleAnimal.id === 0) return;

    animal.updateFed(singleAnimal.id);
  }, [singleAnimal]);

  useEffect(() => {
    if (params.id) {
      for (let i = 0; i < animal.animals.length; i++) {
        if (animal.animals[i].id === parseInt(params.id)) {
          setSingleAnimal(animal.animals[i]);
          localStorage.setItem(LS_animal, JSON.stringify(singleAnimal));
        }
      }
    }
  }, [animal.animals]);

  return (
    <Wrapper>
      <ContentWrapper>
        <SingleAnimalWrapper>
          <StyledH1> {singleAnimal.name}</StyledH1>

          <StyledParagraphs>
            Född år: {singleAnimal.yearOfBirth}
          </StyledParagraphs>

          <ImageWrapper>
            <StyledImage
              src={singleAnimal.imageUrl}
              alt={singleAnimal.name}
              onError={handleError}
            ></StyledImage>
          </ImageWrapper>
          <StyledH5>Det här är {singleAnimal.name}</StyledH5>
          <StyledParagraphs>{singleAnimal.shortDescription}</StyledParagraphs>

          <StyledH5>Fakta om rasen</StyledH5>
          <StyledParagraphs>
            Om rasen: {singleAnimal.longDescription}
          </StyledParagraphs>
          {singleAnimal.isFed ? (
            <StyledDisable disabled={singleAnimal.isFed}>
              {singleAnimal.name} är mätt!
            </StyledDisable>
          ) : (
            <StyledButton onClick={() => animal.feedAnimal(singleAnimal.id)}>
              Mata {singleAnimal.name}
            </StyledButton>
          )}

          <StyledParagraphs>
            {singleAnimal.name} fick sin mat{" "}
            {new Date(singleAnimal.lastFed).toLocaleString()}
          </StyledParagraphs>
          <StyledAlink to="/">Tillbaka</StyledAlink>
        </SingleAnimalWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
