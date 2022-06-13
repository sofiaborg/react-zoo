import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";

//styles
import {
  BGWrapper,
  ContentWrapper,
  AnimalWrapper,
  ImageWrapper,
  InfoWrapper,
} from "../styledComponents/StyledWrappers";

import { StyledImage } from "../styledComponents/StyledImages";

import { StyledButton } from "../styledComponents/StyledButton";
import { StyledHeadings } from "../styledComponents/StyledHeadings";
import { StyledParagraphs } from "../styledComponents/StyledParagraphs";

//component
export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <BGWrapper>
      <ContentWrapper>
        <AnimalWrapper>
          {animals.animals.map((animal) => {
            return (
              <div>
                <StyledHeadings>{animal.name}</StyledHeadings>

                <ImageWrapper>
                  <StyledImage
                    src={animal.imageUrl}
                    alt={animal.name}
                  ></StyledImage>
                </ImageWrapper>
                <InfoWrapper>
                  <StyledParagraphs>{animal.shortDescription}</StyledParagraphs>
                </InfoWrapper>
                <Link to={"/" + animal.id} key={animal.id}>
                  <StyledButton>Läs mer om {animal.name}</StyledButton>
                </Link>
              </div>
            );
          })}
        </AnimalWrapper>
      </ContentWrapper>
    </BGWrapper>
  );
};
