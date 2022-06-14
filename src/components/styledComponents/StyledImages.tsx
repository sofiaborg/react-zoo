import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;

  @media screen and (min-width: 640px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;
