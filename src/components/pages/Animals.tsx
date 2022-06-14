import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";

//styles
import {
  Wrapper,
  ContentWrapper,
  AnimalWrapper,
} from "../styledComponents/StyledWrappers";

import { StyledButton } from "../styledComponents/StyledButton";
import { StyledImage, ImageWrapper } from "../styledComponents/StyledImages";
import { StyledH1, StyledParagraphs } from "../styledComponents/StyledText";
const errorImg = require("../../assets/onError.jpg");

//component
export const Animals = () => {
  const animals = useContext(AnimalContext);

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = errorImg;
  };

  return (
    <Wrapper>
      <ContentWrapper>
        {animals.animals.map((animal) => {
          return (
            <AnimalWrapper>
              <StyledH1>{animal.name}</StyledH1>
              <ImageWrapper>
                <StyledImage
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={handleError}
                ></StyledImage>
              </ImageWrapper>
              <StyledParagraphs>{animal.shortDescription}</StyledParagraphs>

              <Link to={"/animals/" + animal.id} key={animal.id}>
                <StyledButton>Läs mer om {animal.name}</StyledButton>
              </Link>
            </AnimalWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};
