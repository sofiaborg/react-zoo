import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../contexts/AnimalContext";
import { BGWrapper } from "../styledComponents/StyledWrappers";
import { ContentWrapper } from "../styledComponents/StyledWrappers";
import { AnimalWrapper } from "../styledComponents/StyledWrappers";
import { ImageWrapper } from "../styledComponents/StyledWrappers";
import { InfoWrapper } from "../styledComponents/StyledWrappers";
import { StyledImage } from "../styledComponents/StyledImages";

export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <BGWrapper>
      <ContentWrapper>
        <AnimalWrapper>
          {animals.animals.map((animal) => {
            return (
              <div>
                <p>{animal.name}</p>
                <ImageWrapper>
                  <StyledImage
                    src={animal.imageUrl}
                    alt={animal.name}
                  ></StyledImage>
                </ImageWrapper>
                <InfoWrapper>{animal.shortDescription}</InfoWrapper>
                <Link to={"/" + animal.id} key={animal.id}>
                  <button>Läs mer om {animal.name}</button>
                </Link>
              </div>
            );
          })}
        </AnimalWrapper>
      </ContentWrapper>
    </BGWrapper>
  );
};
