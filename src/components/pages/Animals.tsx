import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";

//styles
import {
  Wrapper,
  ContentWrapper,
  AnimalWrapper,
} from "../styledComponents/StyledWrappers";

import { ShakyImage, ImageWrapper } from "../styledComponents/StyledImages";
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
            <AnimalWrapper key={animal.id}>
              <StyledH1>{animal.name}</StyledH1>
              <ImageWrapper>
                <Link to={"/animals/" + animal.id}>
                  <ShakyImage
                    src={animal.imageUrl}
                    alt={animal.name}
                    onError={handleError}
                  ></ShakyImage>
                </Link>
              </ImageWrapper>
              <StyledParagraphs>{animal.shortDescription}</StyledParagraphs>
            </AnimalWrapper>
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};
